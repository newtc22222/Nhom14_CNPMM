const express = require('express');
const {
    httpGetAllProducts,
    httpFindProductWithId,
    httpGetProductImages,
    httpCreateNewProduct,
    httpUpdateProduct,
    httpDeleteProduct
} = require('../controllers/product.controller');
const upload = require('../middlewares/uploadFile');

const productRouter = express.Router();

productRouter.get('/', httpGetAllProducts);
productRouter.get('/:id', httpFindProductWithId);
productRouter.get('/:id/images', httpGetProductImages);
productRouter.post('/', upload.array('images', 10), httpCreateNewProduct);
productRouter.put('/:id', upload.array('images', 10), httpUpdateProduct);
productRouter.delete('/:id', httpDeleteProduct);

module.exports = productRouter;