const express = require('express');

const feedbackController = require('./../controllers/feedbackController');
const router = express.Router();

router.route('/').post(feedbackController.feedbacksList);
router.route('/add').post(feedbackController.addNewFeedback);
router.route('/delete').post(feedbackController.deleteOneFeedback);
module.exports = router;
