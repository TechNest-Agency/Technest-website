const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Comment = require('../models/Comment');

// Get all comments for a blog post
router.get('/blog/:blogId', async (req, res) => {
    try {
        const comments = await Comment.find({ blog: req.params.blogId })
            .populate('user', 'name avatar')
            .populate('parentComment')
            .sort({ createdAt: -1 });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching comments' });
    }
});

// Add a new comment
router.post('/', auth, async (req, res) => {
    try {
        const { blogId, content, parentCommentId } = req.body;

        const newComment = new Comment({
            blog: blogId,
            user: req.user.id,
            content,
            parentComment: parentCommentId || null
        });

        await newComment.save();

        const populatedComment = await Comment.findById(newComment._id)
            .populate('user', 'name avatar')
            .populate('parentComment');

        res.json(populatedComment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating comment' });
    }
});

// Update a comment
router.put('/:commentId', auth, async (req, res) => {
    try {
        const { content } = req.body;
        const comment = await Comment.findById(req.params.commentId);

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        if (comment.user.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        comment.content = content;
        comment.updatedAt = Date.now();
        comment.isEdited = true;

        await comment.save();

        const updatedComment = await Comment.findById(comment._id)
            .populate('user', 'name avatar')
            .populate('parentComment');

        res.json(updatedComment);
    } catch (error) {
        res.status(500).json({ message: 'Error updating comment' });
    }
});

// Delete a comment
router.delete('/:commentId', auth, async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        if (comment.user.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        await comment.remove();
        res.json({ message: 'Comment removed' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting comment' });
    }
});

// Like/Unlike a comment
router.post('/:commentId/like', auth, async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        const likeIndex = comment.likes.indexOf(req.user.id);

        if (likeIndex === -1) {
            comment.likes.push(req.user.id);
        } else {
            comment.likes.splice(likeIndex, 1);
        }

        await comment.save();

        const updatedComment = await Comment.findById(comment._id)
            .populate('user', 'name avatar')
            .populate('parentComment');

        res.json(updatedComment);
    } catch (error) {
        res.status(500).json({ message: 'Error updating comment likes' });
    }
});

// Get replies to a comment
router.get('/:commentId/replies', async (req, res) => {
    try {
        const replies = await Comment.find({ parentComment: req.params.commentId })
            .populate('user', 'name avatar')
            .sort({ createdAt: -1 });
        res.json(replies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching replies' });
    }
});

module.exports = router;
