const express = require('express');
const Question = require('../models/Question');
const router = express.Router();

// GET all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
});

// POST a new question
router.post('/', async (req, res) => {
    try {
      const { text, difficulty } = req.body;
      const newQuestion = new Question({ text, difficulty });
      const savedQuestion = await newQuestion.save();
      res.status(201).json(savedQuestion);
    } catch (error) {
      res.status(500).json({ message: 'Error creating question' });
    }
  });


// PUT: Update a question by ID
router.put("/:id", async (req, res) => {
    try {
      const updatedQuestion = await Question.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // return the updated document
      );
  
      if (!updatedQuestion) {
        return res.status(404).json({ message: "Question not found" });
      }
  
      res.status(200).json(updatedQuestion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
