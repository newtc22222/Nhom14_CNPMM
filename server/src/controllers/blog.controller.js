<<<<<<< Updated upstream
const BlogModel = require('../models/blogs/blog.mongo')
const asyncHandler = require('express-async-handler')

const getAllBlog = asyncHandler(async (req, res) => {
    const blog = await BlogModel.find({})
    res.send(blog)
})

const findBlogById = asyncHandler(async (req, res) => {
    const blog = await BlogModel.findById({_id: req.params.id})
    if(blog){
        res.send(blog)
    }else{
        res.send({message: 'blog không tồn tại'})
    }
})
const AddBlog = asyncHandler(async (req, res) => {
    const blog = new BlogModel({
      slug: req.body.slug,
      title: req.body.title,
      address: req.body.address,
      content: req.body.content,
      authorId: req.body.authorId,
      productId: req.body.productId,
      followers: req.body.followers,
    });
    const newBlog = await blog.save();
  
    if (newBlog) {
      return res
        .status(201)
        .send({ message: "tạo blog thành công", data: newBlog });
    } else {
      res.send("Không thể tạo blog");
    }
});

const UpdateBlog = asyncHandler(async (req, res) => {
    const _id = req.params.id;
    const blog = await BlogModel.findById(_id);
    if (blog) {
        blog.slug = req.body.slug,
        blog.title = req.body.title,
        blog.address=  req.body.address,
        blog.content = req.body.content,
        blog.authorId = req.body.authorId,
        blog.productId = req.body.productId,
        blog.followers = req.body.followers
        const updateBlog = await blog.save();
        if (updateBlog) {
            res.send("Cập nhật sản phẩm thành công");
        }
    }
    return res.send("Cập nhật sản phẩm thất bại");
});

const DeleteBlog = asyncHandler(async (req, res) => {
    const blog = await BlogModel.findById({_id: req.params.id})

    if(blog){
        await blog.remove()
        res.send({message: 'xóa category thành công'})
    }else{
        res.send({message: 'category không tồn tại'})
    }
})

module.exports = {
    getAllBlog,
    findBlogById,
    AddBlog,
    UpdateBlog,
    DeleteBlog
}

=======
const {
    getAllBlogs,
    findBlogWithId,
    findBlogWithSlug,
    findBlogsWithCategoryId,
    findBlogsWithProductName,
    getBlogsOfUser,
    getBlogsSaveOfUser, 
    getFollowers, 
    createNewBlog,
    updateBlog,
    removeBlog
} = require('../models/blogs/blog.model');

const {
    getPagination
} = require('../services/query')

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
    httpFindBlogWithCategoryId,
    httpGetBlogsOfUser,
    httpGetBlogsSaveOfUser,
    httpGetFollowers, // hien thi 1 vai thong tin cua nguoi dung dang theo doi 
    httpCreateNewBlog,
    httpUpdateBlog,
    httpRemoveBlog
};
>>>>>>> Stashed changes
