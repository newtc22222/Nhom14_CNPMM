const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    slug: {
        type: String, //slug: ca-canh-nuoi-trong-nha-tp-ho-chi-minh
        required: true,
    },
    title: {
        type: String,
        required: [true, 'You need this field to show what you want reader know!'],
        minLength: [10, 'Title is too short!'],
        maxLength: 100
    },
    address: {
        type: String,
        required: true,
        minLength: [15, 'You need to provide this address!']
    },
    content: {
        type: String,
        require: [true, 'Your blog do not have content? Are you sure?'],
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    followers: [{
        type: String,
    }],
    status: {
        type: String,
        enum: ['ACTIVE', 'STORE', 'REJECT', 'DRAFT'],
        default: 'ACTIVE',
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Blog', blogSchema);