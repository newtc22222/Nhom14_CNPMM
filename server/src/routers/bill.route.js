const express = require('express');

const {
    httpGetBills,
    httpFindBillWithId,
    httpCreateNewBill,
    httpUpdateBill,
    httpRemoveBill
} = require('../controllers/bill.controller');

const billRouter = express.Router();

billRouter.get('/', httpGetBills);
billRouter.get('/:id', httpFindBillWithId);
billRouter.post('/', httpCreateNewBill);
billRouter.put('/:id', httpUpdateBill);
billRouter.delete('/:id', httpRemoveBill);

module.exports = billRouter;