const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    rootCommentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    },
    content: {
        type: String,
        required: true,
        maxLength: 300
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);