const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Chat', chatSchema);