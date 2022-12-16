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