const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },    
    name: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
        required: [true, 'You need image to show reader know what it is.']
    }],
    description: {
        type: String,
        required: [true, 'Some information has a big data!']
    },
    price: {
        type: Number,
        required: true,
        min: 1
    }
});

module.exports = mongoose.model('Product', productSchema);