const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true,
        min: 1
    },
    productQuantity: {
        type: Number,
        required: true,
        min: 1
    },
    status: {
        type: String,
        enum: ['WAIT_FOR_CONFIRM', 'DONE', 'CANCEL_BY_SELLER', 'CANCEL_BY_BUYER', 'FAILED'],
        default: 'WAIT_FOR_CONFIRM'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Bill', billSchema);