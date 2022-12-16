const fs = require('fs');
const path = require('path');

const {
    getAllUsers,
    findUserWithId,
    findUserWithPhoneAndPassword,
    getFollowings, // theo doi
    getFollowers, // nguoi theo doi
    createNewUser,
    updateUser,
    changePassword, // doi mat khau: PATCH
    deleteUser
} = require('../models/users/user.model');

const {
    getPagination
} = require('../services/query')

async function httpGetAllUsers (req, res) {
    const users = await getAllUsers();
    if(users.length > 0) {
        return res.status(200).json(users);
    }
    return res.status(404).json({ error: "Not found any user!" });
}

async function httpFindUserWithId (req, res) {
    const userId = req.params.id;
    const user = await findUserWithId(userId);

    if(user) {
        return res.status(200).json(user);
    }
    return res.status(404).json({ error: 'Cannot find user with id=' + userId });
}

async function httpSystemLogin (req, res) {
    const { phone, password } = req.body;

    const user = await findUserWithPhoneAndPassword(phone, password);
    if(user) {
        return res.status(200).json(user);
    }
    return res.status(404).json({ error: "Data invalid!" });
}

async function httpGetFollowings (req, res) {
    const userId = req.params.id;
    const oldUser = await findUserWithId(userId);
    
    if(!oldUser) {
        return res.status(404).json({ error: "User not found!"});
    }

    const users = await getFollowings(userId);
    return res.status(200).json(users);
}

async function httpGetFollowers (req, res) {
    const userId = req.params.id;
    const oldUser = await findUserWithId(userId);
    
    if(!oldUser) {
        return res.status(404).json({ error: "User not found!"});
    }

    const users = await getFollowers(userId);
    return res.status(200).json(users);
}

async function httpCreateNewUser (req, res) {
    const newUser = {
        name: req.body.name,
        dob: req.body.dob,
        gender: req.body.gender,
        address: {
            street: req.body.address.street,
            town: req.body.address.town,
            province: req.body.address.province
        },
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        isAdmin: req.body.isAdmin,
        userFollowings: []
    }    
    
    const result = await createNewUser(newUser);
    if(result) {
        return res.status(201).json(result);
    }
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpUpdateUser (req, res) {
    const userId = req.params.id;
    const oldUser = await findUserWithId(userId);
    
    if(!oldUser) {
        return res.status(404).json({ error: "User not found!"});
    }

    const newUser = {
        name: req.body.name,
        dob: req.body.dob,
        gender: req.body.gender,
        address: {
            street: req.body.address.street,
            town: req.body.address.town,
            province: req.body.address.province
        },
        email: req.body.email,
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        userFollowings: req.body.userFollowings
    }

    try {
        newUser.avatar = {
            data: fs.readFileSync(path.join(__dirname, '..', '..', '/uploads/' + req.file.filename)),
            contentType: 'image/png'  
        }
    }  
    catch(err) {
        console.log(err);
    }  

    const result = await updateUser(newUser, userId);
    if(result) {
        return res.status(200).json(result);
    }
    return res.status(501).json({ error: "Failed to update!" });
}

async function httpUpdatePassword (req, res) {
    const userId = req.params.id;
    const oldUser = await findUserWithId(userId);
    
    if(!oldUser) {
        return res.status(404).json({ error: "User not found!"});
    }

    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    const result = await changePassword(oldPassword, newPassword, userId);
    if(result) {
        return res.status(200).json(result);
    }
    return res.status(501).json({ error: "Failed to update password!" });
}

async function httpDeleteUser (req, res) {
    const userId = req.params.id;
    const oldUser = await findUserWithId(userId);
    
    if(!oldUser) {
        return res.status(404).json({ error: "User not found!"});
    }

    const result = await deleteUser(userId);
    if(result) {
        return res.status(200).json(result);
    }
    return res.status(501).json({ error: "Failed to update password!" });
}

module.exports = {
    httpGetAllUsers,
    httpFindUserWithId,
    httpSystemLogin,
    httpGetFollowings,
    httpGetFollowers,
    httpCreateNewUser,
    httpUpdateUser,
    httpUpdatePassword,
    httpDeleteUser
}