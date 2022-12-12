const express = require('express');
const {
    httpFindMessagesWithId,
    httpCreateNewMessage,
    httpUpdateMessage,
    httpRecallMessage
} = require('../controllers/message.controller');

const messageRouter = express.Router();

messageRouter.get('/:id', httpFindMessagesWithId)
messageRouter.post('/', httpCreateNewMessage);
messageRouter.put('/:id', httpUpdateMessage);
messageRouter.delete('/:id', httpRecallMessage);

module.exports = messageRouter;