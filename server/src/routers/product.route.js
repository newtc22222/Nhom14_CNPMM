const express = require('express');
const {
    httpGetAllProducts,
    httpFindProductWithId,
    httpCreateNewProduct,
    httpUpdateProduct,
    httpDeleteProduct
} = require('../controllers/product.controller');

const productRouter = express.Router();

productRouter.get('/', httpGetAllProducts);
productRouter.get('/:id', httpFindProductWithId);
productRouter.post('/', httpCreateNewProduct);
productRouter.put('/:id', httpUpdateProduct);
productRouter.delete('/:id', httpDeleteProduct);

module.exports = productRouter;