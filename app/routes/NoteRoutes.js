const express = require('express');
const router = express.Router();
const NoteController = require('../controllers/NoteController');
const requireAuth = require('../middleware/AuthMiddleware');

router.get('/', NoteController.getAllNotes);
router.get('/:id', NoteController.getNoteById);
router.post('/', requireAuth, NoteController.createNote);
router.put('/:id', requireAuth, NoteController.updateNote);
router.delete('/:id', requireAuth, NoteController.deleteNote);

module.exports = router;