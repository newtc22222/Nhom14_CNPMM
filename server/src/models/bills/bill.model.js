const mongoose = require('mongoose');
const Bill = require('./bill.mongo');

async function getAllBills(skip, limit) {
    return await Bill
        .find()
        .sort({ createdAt: 'desc' })
        // .skip(skip)
        // .limit(limit)
        .catch(err => null);
}

async function findBills(filter) {
    return await Bill.find(filter)
        .catch(err => null);
}

async function findBillWithId(billId) {
    return await Bill.findById(billId)
        .catch(err => null);
}

async function findBillsWithBuyerId(buyerId) { // find bills
    return await findBills({ buyerId })
}

async function findBillsWithSellerId(sellerId) { // find bills
    return await findBills({ sellerId })
}

async function createNewBill(bill) {
    const newBill = {
        buyerId: mongoose.Types.ObjectId(bill.buyerId),
        sellerId: mongoose.Types.ObjectId(bill.sellerId),
        productId: mongoose.Types.ObjectId(bill.productId),
        productName: bill.productName,
        productImage: bill.productImage,
        productPrice: bill.productPrice,
        productQuantity: bill.productQuantity,
        status: bill.status
    }

    const result = await Bill.create(newBill)
        .catch((err) => null);
    return result;
}

async function updateBill(bill, billId) {
    const newBill = {
        buyerId: mongoose.Types.ObjectId(bill.buyerId),
        sellerId: mongoose.Types.ObjectId(bill.sellerId),
        productId: mongoose.Types.ObjectId(bill.productId),
        productName: bill.productName,
        productImage: bill.productImage,
        productPrice: bill.productPrice,
        productQuantity: bill.productQuantity,
        status: bill.status
    }

    const result = await Bill.updateOne(
        { _id: billId },
        newBill
    )
    .catch((err) => null);

    return result;
}

async function removeBill(billId) {
    const result = await Bill.remove({ _id: billId })
        .catch((err) => null);    
    return result;
}

module.exports = {
    getAllBills,
    findBillWithId,
    findBillsWithBuyerId, // don mua
    findBillsWithSellerId, // don ban
    createNewBill,
    updateBill,
    removeBill,
};