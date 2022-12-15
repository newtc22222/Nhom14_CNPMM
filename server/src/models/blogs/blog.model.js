const mongoose = require('mongoose');
const Blog = require('./blog.mongo');

async function getAllBlogs(skip, limits) {
    return await Blog
        .find()
        .sort({ createdAt: 'desc' })
        // .skip(skip)
        // .limit(limit)
        .catch(err => null);
}

async function findBlogs(filter) {
    return await Blog.find(filter)
        .catch(err => null);
}

async function findBlogWithId(blogId) {
    return await Blog.findById(blogId)
        .catch(err => null);
}

async function findBlogWithSlug(slug) {
    return await findBlogs({ slug });
}

async function findBlogsWithCategoryId(categoryId) {
    return await findBlogs({ categoryId });
}

async function findBlogsWithProductName(name) {
    return await findBlogs({ title: { $regex: name } });
}

async function getBlogsOfUser(authorId) { // find blogs
    return await findBlogs({ authorId });
}

async function getBlogsSaveOfUser(userId) { // find blogs
    return await findBlogs({ followers: { userId } })
        .catch(err => null);
}

async function getFollowers(blogId) {
    return await Blog.find({ }, { followers: 1 })
        .catch(err => null);
}

async function createNewBlog(blog) {
    const newBlog = {
        slug: blog.slug,
        title: blog.title,
        address: blog.address,
        content: blog.content,
        authorId: mongoose.Types.ObjectId(blog.authorId),
        categoryId: mongoose.Types.ObjectId(blog.categoryId),
        productId: mongoose.Types.ObjectId(blog.productId),
        followers: blog.followers
    };

    return await Blog.create(newBlog)
        .catch(err => null);
}

async function updateBlog(blog, blogId) {
    const newBlog = {
        slug: blog.slug,
        title: blog.title,
        address: blog.address,
        content: blog.content,
        authorId: mongoose.Types.ObjectId(blog.authorId),
        categoryId: mongoose.Types.ObjectId(blog.categoryId),
        productId: mongoose.Types.ObjectId(blog.productId),
        followers: blog.followers,
        status: blog.status
    };

    return await Blog.updateOne(
        { _id: blogId },
        newBlog
    ).catch(err => null);
}

async function removeBlog(blogId) {
    return await Blog.remove({ _id: blogId })
        .catch(err => null);
}

module.exports = {
    getAllBlogs,
    findBlogWithId,
    findBlogWithSlug,
    findBlogsWithCategoryId, // tim theo loai san pham
    findBlogsWithProductName, // tim theo ten san pham
    getBlogsOfUser, // blog nguoi dung viet
    getBlogsSaveOfUser, // blog nguoi dung luu
    getFollowers, // nguoi theo doi
    createNewBlog,
    updateBlog,
    removeBlog
};