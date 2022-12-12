const express = require('express');
const {
    httpGetAllBlogs,
    httpFindBlogWithId,
    httpGetFollowers,
    httpCreateNewBlog,
    httpUpdateBlog,
    httpRemoveBlog
} = require('../controllers/blog.controller');

const { httpGetCommentsOfBlog } = require('../controllers/comment.controller');

const blogRouter = express.Router();

blogRouter.get('/', httpGetAllBlogs);
blogRouter.get('/:id', httpFindBlogWithId);
blogRouter.get('/:id/follwers', httpGetFollowers),
blogRouter.post('/', httpCreateNewBlog);
blogRouter.put('/:id', httpUpdateBlog);
blogRouter.delete('/:id', httpRemoveBlog);

// comments
blogRouter.get('/:id/comments', httpGetCommentsOfBlog);

module.exports = blogRouter;