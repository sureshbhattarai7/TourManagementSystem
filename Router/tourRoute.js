const express = require('express');
const router = express.Router();
const tourController = require('./../Controller/tourController');

router.route('/')
    .post(tourController.createTour)
    .get(tourController.getTour);

router.route('/:id')
    .get(tourController.getTour)
    .post(tourController.updateTour);

module.exports = router;