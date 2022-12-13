const express = require('express');
const {
    getAllCategory,
    findCategoryById,
    AddCategory,
    UpdateCategory,
    DeleteCategory
} = require('../controllers/category.controller');

const { httpGetProductByCategory } = require('../controllers/product.controller');

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategory);
categoryRouter.get('/:id', findCategoryById);
categoryRouter.post('/', AddCategory);
categoryRouter.put('/:id', UpdateCategory);
categoryRouter.delete('/:id', DeleteCategory);

// products
//categoryRouter.get('/:id/products', httpGetProductByCategory);

module.exports = categoryRouter;