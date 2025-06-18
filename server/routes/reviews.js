const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Review = require('../models/Review');
const Course = require('../models/Course');

// Get all reviews for a course
router.get('/course/:courseId', async (req, res) => {
    try {
        const reviews = await Review.find({ course: req.params.courseId })
            .populate('user', 'name avatar')
            .sort({ createdAt: -1 });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews' });
    }
});

// Add a new review
router.post('/', auth, async (req, res) => {
    try {
        const { courseId, rating, review } = req.body;

        // Check if user has already reviewed this course
        const existingReview = await Review.findOne({
            course: courseId,
            user: req.user.id
        });

        if (existingReview) {
            return res.status(400).json({ message: 'You have already reviewed this course' });
        }

        const newReview = new Review({
            course: courseId,
            user: req.user.id,
            rating,
            review
        });

        await newReview.save();
        res.json(newReview);
    } catch (error) {
        res.status(500).json({ message: 'Error creating review' });
    }
});

// Update a review
router.put('/:reviewId', auth, async (req, res) => {
    try {
        const { rating, review } = req.body;
        const reviewToUpdate = await Review.findById(req.params.reviewId);

        if (!reviewToUpdate) {
            return res.status(404).json({ message: 'Review not found' });
        }

        if (reviewToUpdate.user.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        reviewToUpdate.rating = rating;
        reviewToUpdate.review = review;
        reviewToUpdate.updatedAt = Date.now();

        await reviewToUpdate.save();
        res.json(reviewToUpdate);
    } catch (error) {
        res.status(500).json({ message: 'Error updating review' });
    }
});

// Delete a review
router.delete('/:reviewId', auth, async (req, res) => {
    try {
        const review = await Review.findById(req.params.reviewId);

        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        if (review.user.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        await review.remove();
        res.json({ message: 'Review removed' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting review' });
    }
});

// Vote a review as helpful
router.post('/:reviewId/helpful', auth, async (req, res) => {
    try {
        const review = await Review.findById(req.params.reviewId);

        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        // Check if user has already voted
        if (review.helpfulVotes.includes(req.user.id)) {
            review.helpfulVotes = review.helpfulVotes.filter(
                id => id.toString() !== req.user.id
            );
        } else {
            review.helpfulVotes.push(req.user.id);
        }

        await review.save();
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: 'Error voting review' });
    }
});

module.exports = router;
