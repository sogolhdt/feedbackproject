const mongoose = require('mongoose');

const feedbacksTable = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'the feedback must have a title'],

  },
  context: {
    type: String,
  },
  rate: {
    type: Number,
    required: [true, 'the feedback must have a rating'],
  },
  name: {
    type: String,
  },
  ip: {
    type: String,
    default: 0,
  },
  browser: {
    type: String,
  },
  timestamp: {
    type: String,
    default: 0,
  }
});

const feedback = mongoose.model('feedback', feedbacksTable);
module.exports = feedback;

