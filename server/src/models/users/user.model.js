const User = require('./user.mongo');

async function getAllUsers(skip, limit) {
    return await User
        .find()
        .skip(skip)
        .limit(limit);
}

async function findUsers(filter) {
    return await User.find(filter);
}

async function findUserWithId(userId) {
    return await User.findOne( { _id: userId } );
}

async function findUserWithPhoneAndPassword(phone, password) {
    return await User.findOne({ 
        phone: phone, 
        password: password
    });
}

async function getFollowings() { // find Users

}

async function getFollowers() { // find Users

}

async function createNewUser(user) {

}

async function updateUser(user, userId) {

}

async function changePassword(newPassword, userId) { // chi thay doi mat khau

}

async function deleteUser(userId) {

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