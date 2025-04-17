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

module.exports = router;
