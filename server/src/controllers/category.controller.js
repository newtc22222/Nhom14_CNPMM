const CategoryModel = require('../models/categories/category.mongo')
const asyncHandler = require('express-async-handler')

const getAllCategory = asyncHandler(async (req, res) => {
    const category = await CategoryModel.find({})
    res.send(category)
})

const findCategoryById = asyncHandler(async (req, res) => {
    const category = await CategoryModel.findById({_id: req.params.id})
    if(category){
        res.send(category)
    }else{
        res.send({message: 'Category không tồn tại'})
    }
})
const AddCategory = asyncHandler(async (req, res) => {
    const category = new CategoryModel({
      slug: req.body.slug,
      type: req.body.type,
      subType: req.body.subType,
      description: req.body.description
    });
    const newCategory = await category.save();
  
    if (newCategory) {
      return res
        .status(201)
        .send({ message: "tạo category thành công", data: newCategory });
    } else {
      res.send("Không thể tạo category");
    }
});

const UpdateCategory = asyncHandler(async (req, res) => {
    const _id = req.params.id;
    const category = await CategoryModel.findById(_id);
    if (category) {
        category.slug = req.body.slug,
        category.type = req.body.type,
        category.subType = req.body.subType,
        category.description = req.body.description
      const updateCategory = await category.save();
      if (updateCategory) {
        res.send("Cập nhật sản phẩm thành công");
      }
    }
    return res.send("Cập nhật sản phẩm thất bại");
});

const DeleteCategory = asyncHandler(async (req, res) => {
    const category = await CategoryModel.findById({_id: req.params.id})

    if(category){
        await category.remove()
        res.send({message: 'xóa category thành công'})
    }else{
        res.send({message: 'category không tồn tại'})
    }
})

module.exports = {
    getAllCategory,
    findCategoryById,
    AddCategory,
    UpdateCategory,
    DeleteCategory
}

