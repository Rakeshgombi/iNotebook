const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// Route 1 = Add a new note: POST "/api/auth/addnewnote", require Login
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

// Route 2 = Get all the notes: GET "/api/auth/fetchallnotes",require Login
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes)
})

module.exports = router;