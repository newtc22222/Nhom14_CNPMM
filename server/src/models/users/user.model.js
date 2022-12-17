const User = require('./user.mongo');
const bcrypt = require('bcrypt');

async function getAllUsers(skip, limit) {
    return await User
        .find({}, { password: 0 })
        // .skip(skip)
        // .limit(limit)
        .catch((err) => null);
}

async function findUsers(filter) {
    return await User.find(filter, { password: 0 })
        .catch((err) => null);
}

async function findUserWithId(userId) {
    return await User.findOne( { _id: userId }, { password: 0 } )
        .catch((err) => null);
}

async function findUserWithIdAndPassword(userId, password) {
    return await User.findOne({ _id: userId })
        .then(async (user) => {          
            return await user.comparePassword(password);
        })
        .catch((err) => false);
}

async function findUserWithPhoneAndPassword(phone, password) {
    return await User.findOne({ phone })
        .then(async (user) => {           
            const match = await user.comparePassword(password);
            user.password = "";
            return (match) ? user : null;
        })
        .catch((err) => null);
}

async function getFollowings(userId) { // find Users
    return await findUsers({ _id: userId }, { userFollowings: 1 })
        .catch((err) => null);
}

async function getFollowers(userId) { // find Users
    return await findUsers({ userFollowings: { userId } })
        .catch((err) => null);
}

async function createNewUser(user) {
    return await User.create(user)
        .catch((err) => {
            console.log(err);
            return null;
        })
}

async function updateUser(user, userId) {
    return await User.updateOne(
        { _id: userId },
        user
    ).catch((err) => {
        return null;
    })
}

async function changePassword(oldPassword, newPassword, userId) { // chi thay doi mat khau 
    const correctPassword = await findUserWithIdAndPassword(userId, oldPassword);
    if(!correctPassword)
        return null;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newPassword, salt);

    return await User.updateOne(
        { _id: userId },
        { password: hash }
    )
    .catch((err) => {
        console.log(err);
        return null;
    })
}

async function deleteUser(userId) {
    const result = await User.remove({ _id: userId })
        .catch((err) => {
            return null;
        });
    return result;
}

module.exports = {
    getAllUsers,
    findUserWithId,
    findUserWithPhoneAndPassword,
    getFollowings, // theo doi
    getFollowers, // nguoi theo doi
    createNewUser,
    updateUser,
    changePassword, // doi mat khau: PATCH
    deleteUser
};