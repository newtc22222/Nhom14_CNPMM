const {
    getAllBlogs,
    findBlogWithId,
    findBlogWithSlug,
    getAllBlogDetails,
    getBlogDetailWithId,
    findBlogsWithCategoryId,
    findBlogsWithProductName,
    getBlogsOfUser,
    getBlogsSaveOfUser, 
    getFollowers, 
    createNewBlog,
    updateBlog,
    removeBlog
} = require('../models/blogs/blog.model');

const { findCategoryWithId } = require('../models/categories/category.model');
// const { findProductWithId } = require('../models/products/product.model');
// const { getCommentsOfBlog } = require('../models/comments/comment.model');

async function httpGetAllBlogs (req, res) {
    const productName = req.query.key;
    if(productName) {
        const blogs = await findBlogsWithProductName(productName);
        return res.status(200).json(blogs);
    }    
    
    const blogs = await getAllBlogs();
    return res.status(200).json(blogs);
}

async function httpFindBlogWithId (req, res) {
    const blogId = req.params.id;
    const blog = await findBlogWithId(blogId);
    if(blog) {
        return res.status(200).json(blog);
    }
    return res.status(404).json({ error: "Not found blog with id=" + blogId });
}

async function httpGetAllBlogDetails(req, res) {
    const blogs = await getAllBlogDetails();
    if(blogs) {
        return res.status(200).json(blogs);
    }
    return res.status(404).json({ error: "Not found any blog!" });
}

async function httpGetBlogDetailWithIdOrSlug(req, res) {
    const blogId = req.params.id;
    if(blogId) {
        const blog = await getBlogDetailWithId(blogId, null);
        if(blog) {
            return res.status(200).json(blog);
        }
        return res.status(404).json({ error: "Not found blog with id=" + blogId });
    }
    else {
        const slug = req.params.slug;
        const blog = await getBlogDetailWithId(null, slug);
        if(blog) {
            return res.status(200).json(blog);
        }
        return res.status(404).json({ error: "Not found blog with slug=" + slug });
    }    
}

async function httpFindBlogWithSlug (req, res) {
    const slug = req.params.slug;
    const blog = await findBlogWithSlug(slug);
    if(blog) {
        return res.status(200).json(blog);
    }
    return res.status(404).json({ error: "Not found blog with slug = " + slug });
}

async function httpFindBlogWithCategoryId (req, res) {
    const categoryId = req.params.id;
    const blogs = await findBlogsWithCategoryId(categoryId);
    if(blogs) {
        return res.status(200).json(blogs);
    }
    return res.status(404).json({ error: "Not found any blog with categoryId=" + categoryId });
}

async function httpGetBlogsOfUser (req, res) {
    const userId = req.params.id;
    const blogs = await getBlogsOfUser(userId);
    if(blogs) {
        return res.status(200).json(blog);
    }
    return res.status(404).json({ error: "Not found any blog of user with id=" + userId });
}

async function httpGetBlogsSaveOfUser (req, res) {
    const userId = req.params.id;
    const blogs = await getBlogsSaveOfUser(userId);
    if(blogs) {
        return res.status(200).json(blog);
    }
    return res.status(404).json({ error: "Not found any blog of user with id=" + userId });
}

async function httpGetFollowers (req, res) {
    const blogId = req.params.id;
    const userIdList = await getFollowers(blogId);
    if(userIdList) {
        return res.status(200).json(userIdList);
    }
    return res.status(404).json({ error: "Not found any follower of this blog!" });
}

async function httpCreateNewBlog (req, res) {
    const newBlog = {
        slug: req.body.slug,
        title: req.body.title,
        address: req.body.address,
        content: req.body.content,
        authorId: req.body.authorId,
        categoryId: req.body.categoryId,
        productId: req.body.productId,
        followers: []
    }

    const result = await createNewBlog(newBlog);
    if(result) {
        return res.status(201).json(result);
    }
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpUpdateBlog (req, res) {
    const blogId = req.params.id;
    const existBlog = await findBlogWithId(blogId);
    if(!existBlog) {
        return res.status(404).json({ error: "Not found blog with id=" + blogId });
    }

    const newBlog = {
        slug: req.body.slug,
        title: req.body.title,
        address: req.body.address,
        content: req.body.content,
        authorId: req.body.authorId,
        categoryId: req.body.categoryId,
        productId: req.body.productId,
        followers: req.body.followers,
        status: req.body.status
    }

    const result = await updateBlog(newBlog, blogId);
    if(result) {
        return res.status(200).json(result);
    }
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpRemoveBlog (req, res) {
    const blogId = req.params.id;
    const blog = await findBlogWithId(blogId);
    if(!blog) {
        return res.status(404).json({ error: "Not found blog with id=" + blogId });
    }

    const result = await removeBlog(newBlog);
    if(result) {
        return res.status(200).json(result);
    }
    return res.status(501).json({ error: "Cannot remove this blog!" });
}

module.exports = {
    httpGetAllBlogs,
    httpFindBlogWithId,
    httpFindBlogWithSlug,
    httpGetAllBlogDetails,
    httpGetBlogDetailWithIdOrSlug,
    httpFindBlogWithCategoryId,
    httpGetBlogsOfUser,
    httpGetBlogsSaveOfUser,
    httpGetFollowers, // hien thi 1 vai thong tin cua nguoi dung dang theo doi 
    httpCreateNewBlog,
    httpUpdateBlog,
    httpRemoveBlog
};