const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    categoryId: {
        //type: mongoose.Schema.Types.ObjectId,
        //ref: 'Category',
        type: String,
        required: true
    },    
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: [true, 'Some information has a big data!']
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    images: [{
        type: String
        //type: mongoose.Schema.Types.ObjectId,
        //ref: 'User'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);