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

