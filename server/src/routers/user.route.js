const express = require('express');
import {getAllUser, register, login, DeleteUser} from '../controllers/UserController.js'

const {
    httpGetAllUsers,
    httpFindUserWithId,
    httpSystemLogin,
    httpGetFollowings,
    httpGetFollowers,
    httpCreateNewUser,
    httpUpdateUser,
    httpUpdatePassword,
    httpDeleteUser
} = require('../controllers/user.controller');

const {
    httpGetBlogsOfUser,
    httpGetBlogsSaveOfUser,
} = require('../controllers/blog.controller')

const {
    httpFindBillWithBuyerId,
    httpFindBillWithSellerId
} = require('../controllers/bill.controller');

const { httpGetChatsOfUser } = require('../controllers/chat.controller');
const { httpGetNotificationsOfUser } = require('../controllers/notification.controller');

const userRouter = express.Router();

// login
userRouter.post('/register', register)
userRouter.post('/login', login)

userRouter.get('/', getAllUser)
userRouter.delete('/delete/:id', DeleteUser)

// users
userRouter.get('/', httpGetAllUsers);
userRouter.get('/:id', httpFindUserWithId);
userRouter.post('/login', httpSystemLogin);
userRouter.post('/register', httpCreateNewUser);
userRouter.put('/:id', httpUpdateUser);
userRouter.patch('/:id', httpUpdatePassword);
userRouter.delete('/:id', httpDeleteUser);

// follows
userRouter.get('/:id/followings', httpGetFollowings);
userRouter.get('/:id/followers', httpGetFollowers);

// blogs
userRouter.get('/:id/blogs', httpGetBlogsOfUser);
userRouter.get('/:id/saveBlogs', httpGetBlogsSaveOfUser);

// bills
userRouter.get('/:id/billBuy', httpFindBillWithBuyerId);
userRouter.get('/:id/billSell', httpFindBillWithSellerId);

// chats
userRouter.get('/:id/chatJoin', httpGetChatsOfUser);

// notifications
userRouter.get('/:id/notifications', httpGetNotificationsOfUser);

module.exports = userRouter;