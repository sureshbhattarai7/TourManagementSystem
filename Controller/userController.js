const catchAsync = require('../Utils/catchAsync');
const User = require('./../Model/userModel');

exports.signup = catchAsync(async (req, res, next) => {
    const user = await User.create({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    });

    res.status(201).json({
        status: 'success',
        data: {
            user
        }
    });
});