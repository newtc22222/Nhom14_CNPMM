const Blog = require('./blog.mongo');

async function getAllBlogs(skip, limits) {
    
}

async function findBlogs(filter) {

}

async function findBlogWithId(blogId) {

}

async function getBlogsOfUser(authorId) { // find blogs

}

async function getBlogsSaveOfUser(userId) { // find blogs
    
}

async function getFollowers(blogId) {

}

async function createNewBlog(blog) {

}

async function updateBlog(blog, blogId) {

}

async function removeBlog(blogId) {

}

module.exports = {
    getAllBlogs,
    findBlogWithId,
    getBlogsOfUser, // blog nguoi dung viet
    getBlogsSaveOfUser, // blog nguoi dung luu
    getFollowers, // nguoi theo doi
    createNewBlog,
    updateBlog,
    removeBlog
};