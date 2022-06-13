const router = require('express').Router();
const {notes} = require('../../db/db');
const {createNote} = require('../../lib/notes');

router.get('/api/notes', (req, res) => {
    res.json(notes);
});

router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNote(req.body, notes);
    res.json(note);
});

module.exports = router;