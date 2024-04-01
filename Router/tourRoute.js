const express = require('express');
const router = express.Router();
const tourController = require('./../Controller/tourController');

router.route('/')
    .post(tourController.createTour)
    .get(tourController.getTours);

router.route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = router;