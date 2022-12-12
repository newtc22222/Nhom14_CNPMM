const UserModel = require('../models/users/user.mongo')
const {generateToken} = require('../utils/util')
const asyncHandler = require('express-async-handler')

const getAllUser = (req, res) => {
    UserModel.find({})
        .then(user => res.send(user))
        .catch(err => console.log(err))
}

const register = asyncHandler(async (req, res) => {
    const user = new UserModel({
        // _id: req.body._id,
        name: req.body.name,
        dob: '',
        gender: '',
        address: '',
        email: req.body.email,
        phone: '',
        password: req.body.password,
        isAdmin: false,
        userFollowings: '',
    })
    const createUser = user.save();
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
        token: generateToken(user),
    });
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
            token: generateToken(user),
        });
    }else{
        res.status(401).send({message: "Sai tài khoản hoặc mật khẩu"})
    }
})
const DeleteUser = asyncHandler(async (req, res) => {
    const user = await UserModel.findbyID({_id: req.params.id})

    if(user){
        await user.remove()
        res.send({message: 'xóa user thành công'})
    }else{
        res.send({message: 'user không tồn tại'})
    }
})

module.exports = {
    getAllUser,
    register,
    login,
    DeleteUser
};