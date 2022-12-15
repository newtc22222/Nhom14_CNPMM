const { default: mongoose } = require('mongoose');
const Product = require('./product.mongo');

async function getAllProducts(skip, limit) {
    return await Product
        .find({}, { images: 0 })
        // .skip(skip)
        // .limit(limit)
        .catch(err => null);
}

async function findProducts(filter) {
    return await Product.find(filter)
        .catch(err => null);
}

async function findProductWithId(productId) {
    return await Product.findById(productId, { images: 0 })
        .catch(err => null);
}

async function getProductImages(productId) {
    return await Product.findById(productId, { images: 1 })
        .catch(err => null);
}

async function getProductsByCategory(categoryId) { // find products
    return await findProducts({ categoryId });
}

async function getProductsByImage(image) { // find products
    return null;
}

async function getProductsByName(name) { // find products
    return await findProducts({ name: { $regex: name } });
}

async function createNewProduct(product) {
    const newProduct = {
        categoryId: mongoose.Types.ObjectId(product.categoryId),
        name: product.name,
        images: product.images,
        description: product.description,
        price: product.price
    };

    return await Product.create(newProduct)
        .catch(err => null);
}

async function updateProduct(product, productId) {
    const newProduct = {
        categoryId: mongoose.Types.ObjectId(product.categoryId),
        name: product.name,
        images: product.images,
        description: product.description,
        price: product.price
    };

    return await Product.updateOne(
        { _id: productId },
        newProduct
    ).catch(err => null);
}

async function deleteProduct(productId) {
    return await Product.remove({ _id: productId })
        .catch(err => null);
}

module.exports = {
    getAllProducts,
    findProductWithId,
    getProductImages,
    getProductsByCategory, // loai san pham
    getProductsByImage, // hinh anh san pham (quan trong)
    getProductsByName, // ten san pham
    createNewProduct,
    updateProduct,
    deleteProduct
}; 