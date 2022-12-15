<<<<<<< Updated upstream
const UserModel = require('../models/users/user.mongo')
//const {generateToken} = require('../utils/util')
const asyncHandler = require('express-async-handler')

const getAllUser = asyncHandler(async (req, res) => {
    const users = await UserModel.find({})
    res.send(users)
})
const getUserById = asyncHandler(async (req, res) => {
    const user = await UserModel.findById({_id: req.params.id})
    if(user){
        res.send(user)
    }else{
        res.send({message: 'user không tồn tại'})
    }
})
const register = asyncHandler(async (req, res) => {
    const user = new UserModel({
        // _id: req.body._id,
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        isAdmin: false,
        userFollowings: req.body.userFollowings
    });
    const createUser = await user.save();
    if (createUser) {
        return res
          .status(201)
          .send({ message: "Tạo user thành công", data: createUser });
      } else {
        res.send("Không thể tạo user");
      }
})
const login = asyncHandler(async (req, res) => {
    const user = await UserModel.findOne({email: req.body.email, password: req.body.password})
    if(user){ 
        res.send({
            _id: user._id,
            name: user.name,
            dob: user.dob,
            gender: user.gender,
            address: user.address,
            email: user.email,
            phone: user.phone,
            password: user.password,
            isAdmin: user.isAdmin,
            userFollowings: user.userFollowings,
            //token: generateToken(user),
        });
    }else{
        res.status(401).send({message: "Sai tài khoản hoặc mật khẩu"})
    }
})
const UpdateUser = asyncHandler(async (req, res) => {
    const _id = req.params.id;
    const user = await UserModel.findById(_id);
    if (user) {
        user.name = req.body.name;
        user.dob = req.body.dob;
        user.gender = req.body.gender;
        user.address.street = req.body.address.street;
        user.address.town = req.body.address.town;
        user.address.province = req.body.address.province;
        user.email = req.body.email;
        user.phone = req.body.phone;
        user.password = req.body.password;
        user.isAdmin = false;
        user.userFollowings = req.body.userFollowings;
      const updateUser = await user.save();
      if (updateUser) {
        res.send("Cập nhật người dùng thành công");
      }
    }
  
    return res.send("Cập nhật người dùng thất bại");
});
const DeleteUser = asyncHandler(async (req, res) => {
    const user = await UserModel.findById({_id: req.params.id})

    if(user){
        await user.remove()
        res.send({message: 'xóa user thành công'})
    }else{
        res.send({message: 'user không tồn tại'})
=======
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
>>>>>>> Stashed changes
    }

    const result = await deleteUser(userId);
    if(result) {
        return res.status(200).json(result);
    }
    return res.status(501).json({ error: "Failed to update password!" });
}

module.exports = {
<<<<<<< Updated upstream
    getAllUser,
    getUserById,
    register,
    UpdateUser,
    login,
    DeleteUser
};

=======
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
>>>>>>> Stashed changes
