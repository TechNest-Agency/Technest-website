const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    review: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500
    },
    helpfulVotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Prevent duplicate reviews from the same user for the same course
reviewSchema.index({ course: 1, user: 1 }, { unique: true });

// Update course average rating when a review is added or modified
reviewSchema.post('save', async function() {
    const Course = mongoose.model('Course');
    const course = await Course.findById(this.course);
    
    const stats = await this.constructor.aggregate([
        {
            $match: { course: this.course }
        },
        {
            $group: {
                _id: '$course',
                avgRating: { $avg: '$rating' },
                numReviews: { $sum: 1 }
            }
        }
    ]);

    if (stats.length > 0) {
        course.rating = stats[0].avgRating;
        course.numberOfReviews = stats[0].numReviews;
    } else {
        course.rating = 0;
        course.numberOfReviews = 0;
    }

    await course.save();
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
