const express = require('express');
const {
    httpGetAllCategories,
    httpFindCategoryWithId,
    httpCreateNewCategory,
    httpUpdateCategory,
    httpRemoveCategory
} = require('../controllers/category.controller');

const { httpGetProductByCategory } = require('../controllers/product.controller');

const categoryRouter = express.Router();

categoryRouter.get('/', httpGetAllCategories);
categoryRouter.get('/:id', httpFindCategoryWithId);
categoryRouter.post('/', httpCreateNewCategory);
categoryRouter.put('/:id', httpUpdateCategory);
categoryRouter.delete('/:id', httpRemoveCategory);

// products
categoryRouter.get('/:id/products', httpGetProductByCategory);

module.exports = categoryRouter;