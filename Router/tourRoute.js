const express = require('express');
const router = express.Router();
const tourController = require('./../Controller/tourController');

router.route('/').post(tourController.createTour);

module.exports = router;