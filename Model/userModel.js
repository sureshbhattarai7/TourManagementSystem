const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Fullname is required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        unique: [true, 'Username must be unique!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: [true, 'Email must be unique!'],
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a valid email address!']
    },
    photo: {
        type: String,
        default: 'default.png'
    },
    role: {
        type: String,
        enum: ['admin', 'guide', 'user'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: 8,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password!'],
        validate: {
            validator: function (el) {
                return el = this.password;
            },
            message: 'Password must be same!'
        }
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;