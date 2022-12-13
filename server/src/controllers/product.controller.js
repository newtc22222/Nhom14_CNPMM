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
    }
})
const SearchProduct = asyncHandler(async (req, res) => {
    const name = req.query.name
    const product = await ProductModel.find({name: {$regex: name, $options: '$i'}})
    
    product.length > 0 ? res.send(product) : res.send({message: ' khong tim thay sp'})
})
module.exports = {
    getAllProduct,
    findProductById,
    filterProductByCategoryID,
    AddProduct,
    UpdateProduct,
    DeleteProduct,
    SearchProduct,
}
