const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    chatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['SEND', 'EDITED', 'RECALL'],
        default: 'RECALL'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Message', messageSchema);