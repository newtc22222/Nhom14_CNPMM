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
    }
})

module.exports = {
    getAllUser,
    getUserById,
    register,
    UpdateUser,
    login,
    DeleteUser
};

