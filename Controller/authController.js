const User = require('./../Model/userModel');
const AppError = require('./../Utils/appError');
const catchAsync = require('./../Utils/catchAsync');

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

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    //Check if email and password exists
    if (!email || !password) {
        return next(new AppError(`Please enter email and password!`, 400));
    }

    //Check if user exists and password is correct
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError(`Incorrect email or password!`, 400));
    }

    //If everything OK
    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    })
});
