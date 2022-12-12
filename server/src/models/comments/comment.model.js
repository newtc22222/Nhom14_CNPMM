const Comment = require('./comment.mongo');

async function getAllComments(skip, limit) {
    
}

async function findComments(filter) {

}

async function findCommentWithId(commentId) {

}

async function getCommentsOfBlog(blogId) { // find comments

}

async function getCommentsOfUser(userId) { // find comments

}

async function findCommentsByContent(content) { // find comments

}

async function createNewComment(comment) {

}

async function updateComment(comment, commentId) {

}

async function deleteComment(commentId) {

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