const Tour = require('./../Model/tourModel');

exports.createTour = async (req, res, next) => {
    try {
        const tour = await Tour.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    };
};