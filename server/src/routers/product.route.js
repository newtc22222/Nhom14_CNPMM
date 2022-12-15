const express = require('express');
const {
<<<<<<< Updated upstream
    getAllProduct,
    findProductById,
    filterProductByCategoryID,
    AddProduct,
    UpdateProduct,
    DeleteProduct,
    SearchProduct,
=======
    httpGetAllProducts,
    httpFindProductWithId,
    httpGetProductImages,
    httpCreateNewProduct,
    httpUpdateProduct,
    httpDeleteProduct
>>>>>>> Stashed changes
} = require('../controllers/product.controller');
const upload = require('../middlewares/uploadFile');

const productRouter = express.Router();

<<<<<<< Updated upstream
productRouter.get('/', getAllProduct);
productRouter.get('/:id', findProductById);
productRouter.post('/', AddProduct);
productRouter.put('/:id', UpdateProduct);
productRouter.delete('/:id', DeleteProduct);
=======
productRouter.get('/', httpGetAllProducts);
productRouter.get('/:id', httpFindProductWithId);
productRouter.get('/:id/images', httpGetProductImages);
productRouter.post('/', upload.array('images', 10), httpCreateNewProduct);
productRouter.put('/:id', upload.array('images', 10), httpUpdateProduct);
productRouter.delete('/:id', httpDeleteProduct);
>>>>>>> Stashed changes

module.exports = productRouter;