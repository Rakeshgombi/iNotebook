const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// Route 1 = Add a new note: POST "/api/notes/addnewnote", require Login
router.post('/addnote', fetchuser, [
  body('title', "Enter a valid Title").isLength({ min: 3 }),
  body('description', "Description must be minimum 5 characters").isLength({ min: 5 }),], async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // If there are errors, return Bad request errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title, description, tag, user: req.user.id
      })
      const savedNote = await note.save()
      res.json(savedNote)
    } catch (error) {
      res.status(500).send("Internal server error occured");
    }
  })

// Route 2 = Get all the notes: GET "/api/notes/fetchallnotes",require Login
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes)
})

// Route 3 = Update an Existing Note: PUT "/api/notes/updatenote/:id",require Login
router.put('/updatenote/:id', fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  // Create a New Note object
  try {
    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };

    // Find the note to be updated and update it
    note = await Note.findById(req.params.id)
    if (!note) {
      return res.status(404).send("404 Not Found")
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.send(note)
  }
  catch (error) {
    res.status(500).send("Internal server error occured");
  }
})

// Route 4 = Delete an Existing Note: DELETE "/api/notes/deleteenote",require Login
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
  try {
    // Find the note to be delted and delete it
    note = await Note.findById(req.params.id)
    if (!note) {
      return res.status(404).send("404 Not Found")
    }
    // Allow deletion only if user owns this Note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndDelete(req.params.id)
    res.send({ "Success": "This note has been deleted", note: note })
  }
  catch (error) {
    res.status(500).send("Internal server error occured");
  }
})
module.exports = router;