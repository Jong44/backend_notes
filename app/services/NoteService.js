const supabase = require('../config/configSupabase');

const getAllNotes = async () => {
    const {data, error} = await supabase.from('notes').select('*');

    if (error) throw new Error(error.message);
    return data;
}

const getNoteById = async (id) => {
    const {data, error} = await supabase.from('notes').select('*').eq('id', id);

    if (error) throw new Error(error.message);
    return data;
}

const createNote = async (note) => {
    const {data, error} = await supabase.from('notes').insert(note);

    if (error) throw new Error(error.message);
    return data;
}

const updateNote = async (id, note) => {
    const {data, error} = await supabase.from('notes').update(note).eq('id', id);

    if (error) throw new Error(error.message);
    return data;
}

const deleteNote = async (id) => {
    const {data, error} = await supabase.from('notes').delete().eq('id', id);

    if (error) throw new Error(error.message);
    return data;
}

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
}

