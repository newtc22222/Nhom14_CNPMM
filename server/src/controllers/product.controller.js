<<<<<<< Updated upstream
const ProductModel = require('../models/products/product.mongo')
const asyncHandler = require('express-async-handler')

const getAllProduct = asyncHandler(async (req, res) => {
    const products = await ProductModel.find({})
    res.send(products)
})
const findProductById = asyncHandler(async (req, res) => {
    const product = await ProductModel.findById({_id: req.params.id})
    if(product){
        res.send(product)
    }else{
        res.send({message: 'Sản phẩm không tồn tại'})
    }
})

const filterProductByCategoryID =  asyncHandler(async (req, res) => {
    const filterProductByCategoryID = await ProductModel.find({type: req.params.categoryId}).limit(5)
    res.send(filterProductByCategoryID)
})

const AddProduct = asyncHandler(async (req, res) => {
    const product = new ProductModel({
      categoryId: req.body.categoryId,
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      price: req.body.price,
      images: req.body.images
    })
    const newProduct = await product.save();

    if (newProduct) {
      return res
        .status(201)
        .send({ message: "Tạo sản phẩm thành công", data: newProduct });
    } else {
      res.send("Không thể tạo sản phẩm");
    }
})

const UpdateProduct = asyncHandler(async (req, res) => {
    const _id = req.params.id;
    const product = await ProductModel.findById(_id);
    if (product) {
        product.categoryId = req.body.categoryId,
        product.name = req.body.name,
        product.price = req.body.price,
        product.images = req.body.image,
        product.description = req.body.description,
        product.price = req.body.price
      const updateProduct = await product.save();
      if (updateProduct) {
        res.send("Cập nhật sản phẩm thành công");
      }
    }
    return res.send("Cập nhật sản phẩm thất bại");
});

const DeleteProduct = asyncHandler(async (req, res) => {
    const deleteProduct = await ProductModel.findById(req.params.id)
    if(deleteProduct){
        await deleteProduct.remove()
        res.send({message: 'product deleted'})
    } else{
        res.send('error in deletetion')
=======
const fs = require('fs');
const path = require('path');

const {
    getAllProducts,
    findProductWithId,
    getProductImages,
    getProductsByCategory,
    getProductsByImage, // filter (quan trong)
    getProductsByName, // filter
    createNewProduct,
    updateProduct,
    deleteProduct
} = require('../models/products/product.model');

const {
    getPagination
} = require('../services/query')

async function httpGetAllProducts (req, res) {
    const products = await getAllProducts();
    if(products) {
        return res.status(200).json(products);
    }
    return res.status(404).json({ error: "Not found any product!" });
}

async function httpFindProductWithId (req, res) {
    const productId = req.params.id;
    const product = await findProductWithId(productId);

    if(product) {
        return res.status(200).json(product);
    }
    return res.status(404).json({ error: "Not found product with id=" + productId });
}

async function httpGetProductImages (req, res) {
    const productId = req.params.id;
    const product = await getProductImages(productId);

    if(product) {
        return res.status(200).json(product);
    }
    return res.status(404).json({ error: "Not found images of product with id=" + productId });
}

async function httpGetProductByCategory (req, res) {
    const categoryId = req.params.id;
    const products = await getProductsByCategory(categoryId);
    
    if(products) {
        return res.status(200).json(products);
    }
    return res.status(404).json({ error: "Not found any product!" });
}

async function httpCreateNewProduct(req, res) {
    const files = req.files;

    const newProduct = {
        categoryId: req.body.categoryId,
        name: req.body.name,
        images: req.body.images || [],
        description: req.body.description,
        price: req.body.price
    };

    try {
        files.forEach((file) => {
            newProduct.images.push(
                {
                    data: fs.readFileSync(path.join(__dirname, '..', '..', '/uploads/' + file.filename)),
                    contentType: 'image/png' 
                }
            )
        })
    }
    catch(err) {
        console.log(err);
    }

    const result = await createNewProduct(newProduct);
    if(result) {
        return res.status(201).json(result);
>>>>>>> Stashed changes
    }
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpUpdateProduct (req, res) {
    const files = req.files;

    const productId = req.params.id;
    const products = findProductWithId(productId);
    
    if(!products) {
        return res.status(404).json({ error: "Product not found!"});
    }

    const newProduct = {
        categoryId: req.body.categoryId,
        name: req.body.name,
        images: req.body.images || [],
        description: req.body.description,
        price: req.body.price
    };

    try {
        files.forEach((file) => {
            newProduct.images.push(
                {
                    data: fs.readFileSync(path.join(__dirname, '..', '..', '/uploads/' + file.filename)),
                    contentType: 'image/png' 
                }
            )
        })
    }
    catch(err) {
        console.log(err);
    }

    const result = await updateProduct(newProduct, productId);
    if(result) {
        return res.status(200).json(result);
    }
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpDeleteProduct (req, res) {
    const productId = req.params.id;
    const products = findProductWithId(productId);
    
    if(!products) {
        return res.status(404).json({ error: "Product not found!"});
    }

    const result = await deleteProduct(productId);
    if(result) {
        return res.status(200).json(result);
    }
    return res.status(501).json({ error: "Cannot delete this product!" });
}

module.exports = {
    httpGetAllProducts,
    httpFindProductWithId,
    httpGetProductImages,
    httpGetProductByCategory,
    httpCreateNewProduct,
    httpUpdateProduct,
    httpDeleteProduct
}