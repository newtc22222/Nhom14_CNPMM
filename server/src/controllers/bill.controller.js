<<<<<<< Updated upstream
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
=======
const {
    getAllBills,
    findBillWithId,
    findBillsWithBuyerId,
    findBillsWithSellerId,
    createNewBill,
    updateBill,
    removeBill,
} = require('../models/bills/bill.model');
const { createNewBlog } = require('../models/blogs/blog.model');

const {
    getPagination
} = require('../services/query')

async function httpGetBills(req, res) {
    // const { skip, limit } = getPagination(res.query);    
    const bills = await getAllBills();
    return res.status(200).json(bills);
}

async function httpFindBillWithId(req, res) {
    const billId = req.params.id;
    const bill = await findBillWithId(billId);
    if (bill) {
        return res.status(200).json(bill);
    }
    return res.status(404).json({ error: `Cannot find bill with id = ${billId}` });
}

async function httpFindBillWithBuyerId(req, res) {
    const buyerId = req.params.id;
    if (buyerId) {
        const bills = await findBillsWithBuyerId(buyerId);
        return res.status(200).json(bills);
    }
    return res.status(404).json({ error: `Cannot find bill of user with id = ${buyerId}` });
}

async function httpFindBillWithSellerId(req, res) {
    const sellerId = req.params.id;
    if (sellerId) {
        const bills = await findBillsWithSellerId(sellerId);
        return res.status(200).json(bills);
    }
    return res.status(404).json({ error: `Cannot find bill of user with id = ${sellerId}` });
}   

async function httpCreateNewBill(req, res) {
    const newBill = {
        buyerId: req.body.buyerId,
        sellerId: req.body.sellerId,
        productId: req.body.productId,
        productName: req.body.productName,
>>>>>>> Stashed changes
        productImage: req.body.productImage,
        productPrice: req.body.productPrice,
        productQuantity: req.body.productQuantity,
        status: req.body.status
<<<<<<< Updated upstream
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

=======
    }

    const result = await createNewBill(newBill);
    if(result) {
        return res.status(201).json(result);
    } 
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpUpdateBill(req, res) {
    const billId = req.params.id;
    const existBill = await findBillWithId(billId);
    if (!existBill) {
        return res.status(404).json({ error: `Cannot find bill with id = ${billId}` });
    }

    const newBill = {
        buyerId: req.body.buyerId,
        sellerId: req.body.sellerId,
        productId: req.body.productId,
        productName: req.body.productName,
        productImage: req.body.productImage,
        productPrice: req.body.productPrice,
        productQuantity: req.body.productQuantity,
        status: req.body.status
    }

    const result = await updateBill(newBill, billId);
    if(result) {
        return res.status(200).json(result);
    } 
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpRemoveBill(req, res) {
    const billId = req.params.id;
    const existBill = await findBillWithId(billId);
    if (!existBill) {
        return res.status(404).json({ error: `Cannot find bill with id = ${billId}` });
    }

    const result = await removeBill(billId);
    if(result) {
        return res.status(200).json(result);
    } 
    return res.status(501).json({ error: "Cannot remove this bill!" });
}

module.exports = {
    httpGetBills,
    httpFindBillWithId,
    httpFindBillWithBuyerId,
    httpFindBillWithSellerId,
    httpCreateNewBill,
    httpUpdateBill,
    httpRemoveBill
};
>>>>>>> Stashed changes
