const mongoose = require('mongoose');

/**
 * @link https://stackoverflow.com/questions/14588032/mongoose-password-hashing
 */
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

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
    isAdmin: {
        type: Boolean,
        required: true
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

userSchema.pre('save', (next) => {
    var user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if(err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            next();            
        })
    })
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);