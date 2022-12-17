const express = require('express');
const {
    httpGetAllComments,
    httpFindCommentWithId,
    httpCreateNewComment,
    httpUpdateComment,
    httpDeleteComment
} = require('../controllers/comment.controller');

const commentRouter = express.Router();

commentRouter.get('/', httpGetAllComments);
commentRouter.get('/:id', httpFindCommentWithId);
commentRouter.post('/', httpCreateNewComment);
commentRouter.put('/:id', httpUpdateComment);
commentRouter.delete('/:id', httpDeleteComment);

module.exports = commentRouter;