const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 1000
    },
    parentComment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        default: null
    },
    likes: [{
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
    },
    isEdited: {
        type: Boolean,
        default: false
    }
});

// Add index for faster queries
commentSchema.index({ blog: 1, createdAt: -1 });

// Update parent blog's comment count
commentSchema.post('save', async function() {
    const Blog = mongoose.model('Blog');
    await Blog.findByIdAndUpdate(this.blog, {
        $inc: { commentCount: 1 }
    });
});

commentSchema.post('remove', async function() {
    const Blog = mongoose.model('Blog');
    await Blog.findByIdAndUpdate(this.blog, {
        $inc: { commentCount: -1 }
    });
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
