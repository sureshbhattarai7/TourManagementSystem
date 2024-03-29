const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = mongoose.Schema({
    tourName: {
        type: String,
        required: [true, 'Tour Name is required!'],
        unique: [true, 'Tour Name must be unique!'],
        trim: true,
        maxlength: [50, 'Tour name must contain maximum of 50 characters'],
        minlength: [5, 'Tour name must contain at least 5 characters']
    },
    duration: {
        type: Number,
        required: [true, 'Tour duration is required!']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'Maximum size of the group is required!']
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have difficulty'],
        enum: {
            values: ['Easy', 'Medium', 'Difficulty'],
            message: 'A tour difficulty must be 1. Easy 2. Medium 3. Hard'
        }
    },
    ratingsAverage: {
        type: Number,
        min: [1, 'Minimum rating is 1!'],
        max: [5, 'Maximum rating is 5!']
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, 'Price of the tour is required!']
    },
    priceDiscount: {
        type: Number,
        validate: {
            validator: function (val) {
                // this only points to current doc on NEW document creation
                return val < this.price;
            },
            message: 'Discount price ({VALUE}) should be below regular price'
        }
    },
    description: {
        type: String,
        required: [true, 'Tour Description is required!']
    },
    imageCover: {
        type: String,
        required: [true, 'A tour must have a cover image']
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    startDates: [Date],
    secretTour: {
        type: Boolean,
        default: false
    }
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

tourSchema.pre('save', function (next) {
    this.slug = slugify(this.tourName, { lower: true });
    next();
})

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;