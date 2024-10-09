const supabase = require('../config/configSupabase');

const requireAuth = async (req, res, next) => {
    const token =  req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({message: "Unauthorized Token"});
    }
    try{
        const { data: { user }, error } = await supabase.auth.getUser(token);
        if (error || !user) {
            return res.status(401).json({message: "Unauthorized User", data: user});
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized User", data: error.message});
    }
}

module.exports = requireAuth;