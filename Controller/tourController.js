const Tour = require('./../Model/tourModel');
const AppError = require('./../Utils/appError');
const catchasync = require('./../Utils/catchAsync');

exports.createTour = catchasync(async (req, res, next) => {
    const tour = await Tour.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            tour
        }
    })
});

exports.getTours = catchasync(async (req, res, next) => {
    const tour = await Tour.find();
    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
});

exports.getTour = catchasync(async (req, res, next) => {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
        return new AppError(`No Tour found with that ID!`, 404);
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
});

exports.updateTour = catchasync(async (req, res, next) => {
    const tour = await Tour.findByIdAndUpdate(req.params.id, {
        new: true,
        runValidators: true
    });

    if (!tour) {
        return new AppError(`No Tour found with that ID!`, 404);
    };

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    })
})

