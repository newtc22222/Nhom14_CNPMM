const Message = require('./message.mongo');

async function findMessages(filter) { // sort theo thoi gian

}

async function getAllMessagesOfChat(chatId) { // find messages
    
}

async function findMessageWithId(messageId) {

}

async function getMessagesOfUser(userId) { // find messages

}

async function findMessagesWithContent(content) { // find messages

}

async function createNewMessage(message) {

}

async function updateMessage(message, messageId) {

}

async function recallMessage(messageId) { // update (khong dung remove) -> change status: RECALL

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