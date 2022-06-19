const fs = require('fs');
const feedback = require('../models/feedbackModel');
const md5 = require('md5');
const feedbackAPI = require('./../API/feedbackApi');
var MongoClient = require('mongodb').MongoClient;


exports.feedbacksList = async (req, res) => {
  try {
    const api = new feedbackAPI(feedback)
      .getFullList();
    const feedbacksList = await api.query;
    var x = 0;

    await feedbacksList.forEach(el => { x = x + el.rate });
    const countDocuments = await feedback.countDocuments();
    const averageRating = await x / countDocuments;
    res.status(200).json({
      status: 'success',
      feedbacksList,
      averageRating: averageRating

    });

  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};
exports.addNewFeedback = async (req, res) => {
  try {
    const API = new feedbackAPI(feedback, req.body)
      .addNewFeedback();
    const addedDocument = await API.query;
    res.status(200).json({
      status: 'success',
      data: {
        addedDocument
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message
    });

  }
}
exports.deleteOneFeedback = async (req, res) => {
  try {
    const API = new feedbackAPI(feedback, req.body)
      .deleteOneFeedback();
    const deletedDocument = await API.query;
    res.status(200).json({
      status: 'success',

    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message
    });

  }
}