const AppError = require('../Utils/appError');
const catchAsync = require('../Utils/catchAsync');
const User = require('./../Model/userModel');

exports.updatedUser = catchAsync(async (req, res, next) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!updatedUser) {
        return next(new AppError(`Can not find user with that ID!`));
    };
    res.status(200).json({
        status: 'success',
        data: {
            updatedUser
        }
    });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        return next(new AppError(`Can not find user with that ID!`, 400));
    };
    res.status(200).json({
        status: 'success',
        data: null
    });
});