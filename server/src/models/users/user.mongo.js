const mongoose = require('mongoose');
const bcrypt = require('')

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    dob: {
        type: Date,
        //required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        town: {
            type: String,
            required: true
        },
        province: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        unique: true,
        required: [true, 'You need to provide your phone!'],
        minLength: [10, 'Your phone is invalid']
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Your password length must larger than 8 characters!']
    },
    // Follow
    userFollowings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
    // followers: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);