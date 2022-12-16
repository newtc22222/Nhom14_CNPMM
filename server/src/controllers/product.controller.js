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