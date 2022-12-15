<<<<<<< Updated upstream
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

=======
const {
    getAllCategories,
    findCategoryWithId,
    createNewCategory,
    updateCategory,
    removeCategory
} = require('../models/categories/category.model');

const {
    getPagination
} = require('../services/query')

async function httpGetAllCategories (req, res) {
    const categories = await getAllCategories();
    if(categories) {
        return res.status(200).json(categories);
    }
    return res.status(404).json({ error: "Not found any category!" });
}

async function httpFindCategoryWithId (req, res) {
    const categoryId = req.params.id;
    const category = await findCategoryWithId(categoryId);
    if(category) {
        return res.status(200).json(category);
    }
    return res.status(404).json({ error: "Not found category with id=" + categoryId });
}

async function httpCreateNewCategory (req, res) {
    const newCategory = {
        slug: req.body.slug,
        type: req.body.type,
        subtype: req.body.subtype,
        description: req.body.description
    };
    
    const result = await createNewCategory(newCategory);
    if(result) {
        return res.status(201).json(result);
    } 
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpUpdateCategory (req, res) {
    const categoryId = req.params.id;
    const existCategory = await findCategoryWithId(categoryId);
    if(!existCategory)
        return res.status(400).json({ error: "Category not found!"});

    const newCategory = {
        slug: req.body.slug,
        type: req.body.type,
        subtype: req.body.subtype,
        description: req.body.description
    };
    
    const result = await updateCategory(newCategory, categoryId);
    if(result) {
        return res.status(200).json(result);
    } 
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpRemoveCategory (req, res) {
    const categoryId = req.params.id;

    const existCategory = await findCategoryWithId(categoryId);
    if(!existCategory)
        return res.status(404).json({ error: "Category not found!" });

    const result = await removeCategory(categoryId);
    if(result) {
        return res.status(200).json(result);
    } 
    return res.status(501).body({ error: "Cannot remove this category!"});
}

module.exports = {
    httpGetAllCategories,
    httpFindCategoryWithId,
    httpCreateNewCategory,
    httpUpdateCategory,
    httpRemoveCategory
}
>>>>>>> Stashed changes
