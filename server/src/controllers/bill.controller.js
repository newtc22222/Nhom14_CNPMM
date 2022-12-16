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
        productImage: req.body.productImage,
        productPrice: req.body.productPrice,
        productQuantity: req.body.productQuantity,
        status: req.body.status
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
