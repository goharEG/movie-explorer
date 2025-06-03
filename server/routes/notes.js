// server/routes/notes.js
const express = require('express');
const router = express.Router();

const notesStore = {}; // In-memory object for demo

router.get('/:movieId', (req, res) => {
    const notes = notesStore[req.params.movieId] || [];
    res.json(notes);
});

router.post('/:movieId', (req, res) => {
    const { note } = req.body;
    const movieId = req.params.movieId;
    if (!notesStore[movieId]) notesStore[movieId] = [];
    notesStore[movieId].push(note);
    res.status(201).json({ message: "Note added." });
});

module.exports = router;