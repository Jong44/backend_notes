const supabase = require('../config/configSupabase');

const login = async (email, password) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) throw new Error(error.message);
    return data;
}

const register = async (email, password) => {
    const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (error) throw new Error(error.message);
    return data;
}

const logout = async () => {
    const {error} = await supabase.auth.signOut();

    if (error) throw new Error(error.message);
    return "Logged out";
}

module.exports = {
    login,
    register,
    logout
}
