const Product = require('./product.mongo');

async function getAllProducts(skip, limit) {
    
}

async function findProducts(filter) {

}

async function findProductWithId(productId) {

}

async function getProductsByCategory(categoryId) { // find products

}

async function getProductsByImage(image) { // find products

}

async function getProductsByName(name) { // find products

}

async function createNewProduct(product) {

}

async function updateProduct(product, productId) {

}

async function deleteProduct(productId) {

}

module.exports = {
    getAllProducts,
    findProductWithId,
    getProductsByCategory, // loai san pham
    getProductsByImage, // hinh anh san pham (quan trong)
    getProductsByName, // ten san pham
    createNewProduct,
    updateProduct,
    deleteProduct
}; 