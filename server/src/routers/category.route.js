const express = require('express');
const {
    httpGetAllCategories,
    httpFindCategoryWithId,
    httpCreateNewCategory,
    httpUpdateCategory,
    httpRemoveCategory
} = require('../controllers/category.controller');

const { httpGetProductByCategory } = require('../controllers/product.controller');

const { httpFindBlogWithCategoryId } = require('../controllers/blog.controller');

const categoryRouter = express.Router();

categoryRouter.get('/', httpGetAllCategories);
categoryRouter.get('/:id', httpFindCategoryWithId);
categoryRouter.get('/:id/blogs', httpFindBlogWithCategoryId);
categoryRouter.post('/', httpCreateNewCategory);
categoryRouter.put('/:id', httpUpdateCategory);
categoryRouter.delete('/:id', httpRemoveCategory);

// products
categoryRouter.get('/:id/products', httpGetProductByCategory);

// blogs
categoryRouter.get('/:id/blogs', httpFindBlogWithCategoryId);

module.exports = categoryRouter;