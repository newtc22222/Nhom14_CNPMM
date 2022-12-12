const Bill = require('./bill.mongo');

async function getAllBills(skip, limit) {
    return await Bill
        .find()
        .sort({ createdAt: 'desc' })
        .skip(skip)
        .limit(limit);
}

async function findBills(filter) {
    return await Bill.find(filter);
}

async function findBillWithId(billId) {
    // return await Bill.findOne( { _id: billId } );
    return await Bill.findById(billId);
}

async function findBillsWithBuyerId(buyerId) { // find bills
    return await findBills(
        { buyerId: buyerId }
    );
}

async function findBillsWithSellerId(sellerId) { // find bills
    return await findBills(
        { sellerId: sellerId }
    );
}

async function createNewBill(bill) {
    // const newBill = new Bill(bill);
    // await newBill.save().then(() => console.log('Create bill ok!'));
    const {
        buyerId, sellerId, productId, productName, productImage,
        productPrice, productQuantity, status
    } = bill;

    await Bill.create({
        buyerId, sellerId, productId, productName, productImage,
        productPrice, productQuantity, status
    }).then(() => console.log('Create bill ok!'));
}

// async function saveBill(bill) {
//     await Bill.findByIdAndUpdate({
//         _id: bill._id,
//     }, bill, {
//         upsert: true
//     });
// }

async function updateBill(bill, billId) {
    const {
        buyerId, sellerId, productId, productName, productImage,
        productPrice, productQuantity, status
    } = bill;
    const updated = await Bill.findById(billId).update(
        {
            buyerId: buyerId,
            sellerId: sellerId,
            productId: productId,
            productName: productName,
            productImage: productImage,
            productPrice: productPrice,
            productQuantity: productQuantity,
            status: status,
        })
        .then(() => console.log('Update bill ok!'))

    return updated.modifiedCount === 1;
}

async function removeBill(billId) {
    await Bill.findByIdAndRemove({ _id: billId }).then(() => console.log('Remove bill ok!'));
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