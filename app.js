const feedbackRouter = require('./routes/feedbackRoutes');

const express = require('express');
const morgan = require('morgan');
const main = express();
main.use(express.json());
main.use('/api/v1/feedback', feedbackRouter);
module.exports = main;