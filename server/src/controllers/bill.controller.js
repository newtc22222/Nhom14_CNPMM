const BillModel = require('../models/bills/bill.mongo')
const asyncHandler = require('express-async-handler')

const getAllBill = asyncHandler(async (req, res) => {
    const bill = await BillModel.find({})
    res.send(bill)
})

const findBillById = asyncHandler(async (req, res) => {
    const bill = await BillModel.findById({_id: req.params.id})
    if(bill){
        res.send(bill)
    }else{
        res.send({message: 'bill không tồn tại'})
    }
})
const AddBill = asyncHandler(async (req, res) => {
    const bill = new BillModel({
        buyerId: req.body.buyerId,
        sellerId: req.body.sellerId,
        productId: req.body.productId,
        productImage: req.body.productImage,
        productPrice: req.body.productPrice,
        productQuantity: req.body.productQuantity,
        status: req.body.status
    });
    const newBill = await bill.save();
  
    if (newBill) {
      return res
        .status(201)
        .send({ message: "tạo bill thành công", data: newBill });
    } else {
      res.send("Không thể tạo bill");
    }
});

const UpdateBill = asyncHandler(async (req, res) => {
    const _id = req.params.id;
    const bill = await BillModel.findById(_id);
    if (bill) {
        bill.buyerId = req.body.buyerId,
        bill.sellerId = req.body.sellerId,
        bill.productId = req.body.productId,
        bill.productImage = req.body.productImage,
        bill.productPrice = req.body.productPrice,
        bill.productQuantity = req.body.productQuantity,
        bill.status = req.body.status
        const updateBill = await bill.save();
        if (updateBill) {
            res.send("Cập nhật bill thành công");
        }
    }
    return res.send("Cập nhật bill thất bại");
});

const DeleteBill = asyncHandler(async (req, res) => {
    const bill = await BillModel.findById({_id: req.params.id})

    if(bill){
        await bill.remove()
        res.send({message: 'xóa bill thành công'})
    }else{
        res.send({message: 'bill không tồn tại'})
    }
})

module.exports = {
    getAllBill,
    findBillById,
    AddBill,
    UpdateBill,
    DeleteBill
}

