const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },
    users: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Chat', chatSchema);