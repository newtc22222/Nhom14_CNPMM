const Chat = require('./chat.mongo');

async function getAllChats(skip, limit) {
    
}

async function findChats(filter) {

}

async function findChatWithId(chatId) {

}

async function getChatsOfUser(userId) { // find chats

}

async function getChatsWithTopic(topic) { // find chats

}

async function getUsersInChat(chatId) {

}

async function createNewChat(chat) {

}

async function updateChat(chat, chatId) {

}

async function removeChat(chatId) {

}

module.exports = {
    getAllChats,
    findChatWithId,
    getChatsOfUser, // hop thoai chat nguoi dung tham gia
    getChatsWithTopic, // chat voi chu de duoc tim kiem
    getUsersInChat, // nhung nguoi dung tham gia chat
    createNewChat,
    updateChat,
    removeChat
};