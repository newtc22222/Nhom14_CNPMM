const {
    getAllMessagesOfChat,
    findMessageWithId,
    getMessagesOfUser,
    findMessagesWithContent, // filter
    createNewMessage,
    updateMessage,
    recallMessage
} = require('../models/messages/message.model');

const {
    getPagination
} = require('../services/query')

async function httpGetAllMessagesOfChat (req, res) {
    const chatId = req.params.id;
    const messages = getAllMessagesOfChat(chatId);

    if(messages) {
        return res.status(200).json(messages);
    }
    return res.status(404).json({ error: "Not found any message in this chat!" });
}

async function httpFindMessagesWithId (req, res) {
    const messageId = req.params.id;
    const message = findMessageWithId(messageId);
    
    if(message) {
        return res.status(200).json(message);
    }
    return res.status(404).json({ error: "Cannot find message with id=" + messageId });
}

async function httpGetMessagesOfUser (req, res) {
    const userId = req.params.id;
    const messages = await getMessagesOfUser(userId);

    if(message) {
        return res.status(200).json(message);
    }
    return res.status(404).json({ error: "Cannot find message of user with id=" + userId });
}

async function httpCreateNewMessage (req, res) {
    const newMessage = {
        chatId: req.body.chatId,
        userId: req.body.userId,
        content: req.body.content,
        status: 'SEND'
    };

    const result = await createNewMessage(newMessage);
    if(result) {
        return res.status(201).json(result);
    }
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpUpdateMessage (req, res) {
    const messageId = req.params.id;
    const existMessage = findMessageWithId(messageId);
    if(!existMessage) {
        return res.status(404).json({ error: "Message not found!" });
    }

    const newMessage = {
        chatId: req.body.chatId,
        userId: req.body.userId,
        content: req.body.content,
    };

    const result = await updateMessage(newMessage, messageId);
    if(result) {
        return res.status(200).json(result);
    }
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpRecallMessage (req, res) {
    const messageId = req.params.id;
    const existMessage = findMessageWithId(messageId);
    if(!existMessage) {
        return res.status(404).json({ error: "Message not found!" });
    }

    const result = await recallMessage(messageId);
    if(result) {
        return res.status(200).json(result);
    }
    return res.status(501).json({ error: "Invalid data!" });
}

module.exports = {
    httpGetAllMessagesOfChat,
    httpFindMessagesWithId,
    // httpGetMessagesOfUser,
    httpCreateNewMessage,
    httpUpdateMessage,
    httpRecallMessage
}
