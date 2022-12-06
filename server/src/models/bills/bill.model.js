const Bill = require('./bill.mongo');

async function getAllBills(skip, limit) {
    return await Bill
        .find()
        .sort({ createdAt: 'desc' })
        .skip(skip)
        .limit(limit);
}

async function findBill(filter) {
    return await Bill.findOne(filter);
}

async function findBillWithId(billId) {
    return await findBill(
        { _id: billId }
    );
}

async function findBillWithBuyerId(buyerId) {
    
}

async function findBillWithSellerId(sellerId) {

}

async function createNewBill(bill) {
    const newBill = new Bill(bill);
    await newBill.save();
}

// async function saveBill(bill) {
//     await Bill.findByIdAndUpdate({
//         _id: bill._id,
//     }, bill, {
//         upsert: true
//     });
// }

async function updateBill(bill, billId) {
    const updated = await Bill.updateOne({
        _id: billId
    }, {

    })

    return updated.modifiedCount === 1;
}

async function removeBill(billId) {
    await Bill.findByIdAndRemove({ _id: billId });
}

module.exports = {
    getAllBills,
    findBillWithId,
    createNewBill,
    updateBill,
    removeBill,
};