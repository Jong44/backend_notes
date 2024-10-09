const NoteService = require('../services/NoteService');

let response = {
    message: '',
    data: null,
    status: '',
}

exports.getAllNotes = async (req, res) => {
    try {
        const data = await NoteService.getAllNotes();
        if (data.length == 0) {
            response = {
                status: "success",
                message: "No notes found",
                data: []
            }
        } else {
            response = {
                status: "success",
                message: "Notes found",
                data: data
            }
        }
        res.status(200).json(response);
    } catch (error) {
        response = {
            status: "error",
            message: error.message,
            data: []
        }
        res.status(500).json(response);
    }
}

exports.getNoteById = async (req, res) => {
    try {
        const data = await NoteService.getNoteById(req.params.id);
        if (data.length === 0) {
            response = {
                status: "success",
                message: "No notes found",
                data: null
            }
        } else {
            response = {
                status: "success",
                message: "Notes found",
                data: data?.[0]
            }
        }
        res.status(200).json(response);
    } catch (error) {
        response = {
            status: "error",
            message: error.message,
            data: []
        }
        res.status(500).json(response);
    }
}

exports.createNote = async (req, res) => {
    try {
        if (!req.body.title || !req.body.content) {
            response = {
                status: "error",
                message: "Title and content are required",
                data: []
            }
            res.status(400).json(response);
            return;
        }
        const payload = {
            title: req.body.title,
            content: req.body.content,
            update_at: new Date(),
            user_uid: req.user.id
        }
        const data = await NoteService.createNote(payload);
        response = {
            status: "success",
            message: "Note created",
            data: data
        }
        res.status(201).json(response);
    } catch (error) {
        response = {
            status: "error",
            message: error.message,
            data: []
        }
        res.status(500).json(response);
    }
}

exports.updateNote = async (req, res) => {
    try {
        const data = await NoteService.updateNote(req.params.id, req.body);
        response = {
            status: "success",
            message: "Note updated",
            data: data
        }
        res.status(200).json(response);
    } catch (error) {
        response = {
            status: "error",
            message: error.message,
            data: []
        }
        res.status(500).json(response);
    }
}

exports.deleteNote = async (req, res) => {
    try {
        const data = await NoteService.deleteNote(req.params.id);
        response = {
            status: "success",
            message: "Note deleted",
            data: data
        }
        res.status(200).json(response);
    } catch (error) {
        response = {
            status: "error",
            message: error.message,
            data: []
        }
        res.status(500).json(response);
    }
}