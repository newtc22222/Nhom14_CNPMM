const mongoose = require('mongoose');
const Message = require('./message.mongo');

async function findMessages(filter) { // sort theo thoi gian
    return await Message
        .find(filter)
        .sort({ createdAt: 'desc' })
        .catch(err => null)
}

async function getAllMessagesOfChat(chatId) { // find messages
    return await findMessages({ chatId });
}

async function findMessageWithId(messageId) {
    return await Message.findById(messageId)
        .catch(err => null);
}

async function getMessagesOfUser(userId) { // find messages
    return await findMessages({ userId });
}

async function findMessagesWithContent(content) { // find messages
    return await findMessages({ content: { $like: content }});
}

async function createNewMessage(message) {
    const newMessage = {
        chatId: mongoose.Types.ObjectId(message.chatId),
        userId: mongoose.Types.ObjectId(message.userId),
        content: message.content,
        status: message.status
    };

    return await Message.create(newMessage)
        .catch(err => null);
}

async function updateMessage(message, messageId) {
    const newMessage = {
        chatId: mongoose.Types.ObjectId(message.chatId),
        userId: mongoose.Types.ObjectId(message.userId),
        content: message.content,
        status: 'EDIT'
    };

    return await Message.updateOne(
        { _id: messageId },
        newMessage
    ).catch(err => null);
}

async function recallMessage(messageId) { // update (khong dung remove) -> change status: RECALL
    return await Message.updateOne(
        { _id: messageId },
        { status: 'RECALL'}
    ).catch(err => null);
}

module.exports = {
    getAllMessagesOfChat, // lay tin nhan trong chat,
    findMessageWithId,
    getMessagesOfUser, // tin nhan cua nguoi dung
    findMessagesWithContent, // tim noi dung tin nhan
    createNewMessage,
    updateMessage,
    recallMessage // thu hoi tin nhan
};