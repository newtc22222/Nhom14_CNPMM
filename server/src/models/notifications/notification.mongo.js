const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    title: {
        type: String,
        required: true,
        maxLength: [100, 'Your notify title is too long!']
    },
    content: {
        type: String,
        required: true,
        maxLength: 300
    },
    image: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    type: {
        type: String,
        enum: ['activity', 'news'],
        default: 'activity',
        required: true
    }
});