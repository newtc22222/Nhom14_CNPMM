const express = require('express');
const {
    httpGetAllBlogs,
    httpFindBlogWithId,
    httpFindBlogWithSlug,
    httpGetAllBlogDetails,
    httpGetBlogDetailWithIdOrSlug,
    httpGetFollowers,
    httpCreateNewBlog,
    httpUpdateBlog,
    httpRemoveBlog
} = require('../controllers/blog.controller');

const { httpGetCommentsOfBlog } = require('../controllers/comment.controller');

const blogRouter = express.Router();

blogRouter.get('/', httpGetAllBlogs);
blogRouter.get('/details', httpGetAllBlogDetails);
blogRouter.get('/:id', httpFindBlogWithId);
blogRouter.get('/s/:slug', httpFindBlogWithSlug);
blogRouter.get('/:id/details', httpGetBlogDetailWithIdOrSlug);
blogRouter.get('/s/:slug/details', httpGetBlogDetailWithIdOrSlug);
blogRouter.get('/:id/follwers', httpGetFollowers),
blogRouter.post('/', httpCreateNewBlog);
blogRouter.put('/:id', httpUpdateBlog);
blogRouter.delete('/:id', httpRemoveBlog);

// comments
blogRouter.get('/:id/comments', httpGetCommentsOfBlog);

module.exports = blogRouter;