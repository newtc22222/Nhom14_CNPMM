const express = require('express');
const {
    getAllProduct,
    findProductById,
    filterProductByCategoryID,
    AddProduct,
    UpdateProduct,
    DeleteProduct,
    SearchProduct,
} = require('../controllers/product.controller');

const productRouter = express.Router();

productRouter.get('/', getAllProduct);
productRouter.get('/:id', findProductById);
productRouter.post('/', AddProduct);
productRouter.put('/:id', UpdateProduct);
productRouter.delete('/:id', DeleteProduct);

module.exports = productRouter;