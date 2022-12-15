const express = require('express');
const {
    getAllCategory,
    findCategoryById,
    AddCategory,
    UpdateCategory,
    DeleteCategory
} = require('../controllers/category.controller');

const { httpGetProductByCategory } = require('../controllers/product.controller');

const { httpFindBlogWithCategoryId } = require('../controllers/blog.controller');

const categoryRouter = express.Router();

<<<<<<< Updated upstream
categoryRouter.get('/', getAllCategory);
categoryRouter.get('/:id', findCategoryById);
categoryRouter.post('/', AddCategory);
categoryRouter.put('/:id', UpdateCategory);
categoryRouter.delete('/:id', DeleteCategory);
=======
categoryRouter.get('/', httpGetAllCategories);
categoryRouter.get('/:id', httpFindCategoryWithId);
categoryRouter.get('/:id/blogs', httpFindBlogWithCategoryId);
categoryRouter.post('/', httpCreateNewCategory);
categoryRouter.put('/:id', httpUpdateCategory);
categoryRouter.delete('/:id', httpRemoveCategory);
>>>>>>> Stashed changes

// products
//categoryRouter.get('/:id/products', httpGetProductByCategory);

// blogs
categoryRouter.get('/:id/blogs', httpFindBlogWithCategoryId);

module.exports = categoryRouter;