const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    slug: {
        type: String,
        required: true,
        maxLength: 100
    },
    type: {
        type: String, 
        require: true,
        maxLength: 100
    },
    subType: {
        type: String, 
        maxLength: 100
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Category', categorySchema);