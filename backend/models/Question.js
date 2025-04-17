const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    role: String,
    question: String,
    category: String, // e.g., technical, behavioral
});

module.exports = mongoose.model('Question', questionSchema);
