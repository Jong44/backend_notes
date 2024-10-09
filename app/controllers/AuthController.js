const AuthServices = require('../services/AuthService');

let response = {
    message: '',
    data: {},
    status: '',
}

exports.login = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            response = {
                status: "error",
                message: "Email and password are required",
                data: {}
            }
            return res.status(400).json(response);
        }
        const data = await AuthServices.login(req.body.email, req.body.password);
        response = {
            status: "success",
            message: "Logged in",
            data: data.session.access_token
        }
        res.status(200).json(response);
    } catch (error) {
        response = {
            status: "error",
            message: error.message,
            data: {}
        }
        res.status(500).json(response);
    }
}

exports.register = async (req, res) => {
    try {
        // Regex to validate email
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(req.body.email)) {
            response = {
                status: "error",
                message: "Invalid email",
                data: {}
            }
            return res.status(400).json(response);
        }
        if (!req.body.email || !req.body.password) {
            response = {
                status: "error",
                message: "Email and password are required",
                data: {}
            }
            return res.status(400).json(response);
        }
        const data = await AuthServices.register(req.body.email, req.body.password);
        response = {
            status: "success",
            message: "Registered successfully, please check your email to verify your account",
        }
        res.status(200).json(response);
    } catch (error) {
        response = {
            status: "error",
            message: error.message,
            data: {
                email: req.body.email,
                password: req.body.password
            }
        }
        res.status(500).json(response);
    }
}

exports.logout = async (req, res) => {
    try {
        const data = await AuthServices.logout();
        response = {
            status: "success",
            message: "Logged out",
            data: data
        }
        res.status(200).json(response);
    } catch (error) {
        response = {
            status: "error",
            message: error.message,
            data: {}
        }
        res.status(500).json(response);
    }
}