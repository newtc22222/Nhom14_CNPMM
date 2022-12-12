const express = require('express');
const {
    httpGetAllChats,
    httpFindChatWithId,
    httpGetUsersInChat,
    httpCreateNewChat,
    httpUpdateChat,
    httpRemoveChat
} = require('../controllers/chat.controller');

const { httpGetAllMessagesOfChat } = require('../controllers/message.controller');

const chatRouter = express.Router();

chatRouter.get('/', httpGetAllChats);
chatRouter.get('/:id', httpFindChatWithId);
chatRouter.get('/:id/users', httpGetUsersInChat);
chatRouter.post('/', httpCreateNewChat);
chatRouter.put('/:id', httpUpdateChat);
chatRouter.delete('/:id', httpRemoveChat);

// messages
chatRouter.get('/:id/messages', httpGetAllMessagesOfChat);

module.exports = chatRouter;