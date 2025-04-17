const express = require('express');
const User = require('../models/User');
const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

router.post('/', async (req, res) => {
    try {
      const { name, email } = req.body;
      const newUser = new User({ name, email });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ message: 'Error creating user' });
    }
  });

module.exports = router;
