const mongoose = require('mongoose');
const Comment = require('./comment.mongo');

async function getAllComments(skip, limit) {
    return await Comment
        .find()
        // .skip(skip)
        // .limit(limit)
        .catch(err => null);
}

async function findComments(filter) {
    return await Comment
        .find(filter)
        .catch(err => null);
}

async function findCommentWithId(commentId) {
    return await Comment.findById(commentId)
        .catch(err => null);
}

async function getCommentsOfBlog(blogId) { // find comments
    return await findComments({ blogId })
        .catch(err => null);
}

async function getCommentsOfUser(userId) { // find comments
    return await findComments({ userId })
        .catch(err => null);
}

async function findCommentsByContent(content) { // find comments
    return await findComments({ content: { $like: content} })
        .catch(err => null);
}

async function createNewComment(comment) {
    const newComment = {
        rootCommentId: mongoose.Types.ObjectId(comment.rootCommentId),
        userId: mongoose.Types.ObjectId(comment.userId),
        blogId: mongoose.Types.ObjectId(comment.blogId),
        content: comment.content
    };

    return await Comment.create(newComment)
        .catch(err => null);
}

async function updateComment(comment, commentId) {
    const newComment = {
        rootCommentId: mongoose.Types.ObjectId(comment.rootCommentId),
        userId: mongoose.Types.ObjectId(comment.userId),
        blogId: mongoose.Types.ObjectId(comment.blogId),
        content: comment.content
    };

    return await Comment.updateOne(
        { _id: commentId },
        newComment
    ).catch(err => null);
}

async function deleteComment(commentId) {
    return await Comment.deleteOne({ _id: commentId} )
        .catch(err => null);
}

module.exports = {
    getAllComments, // co the bo qua
    findCommentWithId,
    getCommentsOfBlog,
    getCommentsOfUser,
    findCommentsByContent,
    createNewComment,
    updateComment,
    deleteComment
};