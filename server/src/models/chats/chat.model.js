const Chat = require('./chat.mongo');

async function getAllChats(skip, limit) {
    return await Chat
        .find()
        // .skip(skip)
        // .limit(limit)
        .catch(err => null);
}

async function findChats(filter) {
    return await Chat.find(filter)
        .catch(err => null);
}

async function findChatWithId(chatId) {
    return await Chat.findById(chatId)
        .catch(err => null);
}

async function getChatsOfUser(userId) { // find chats
    return await findChats({ users: { userId } });
}

async function getChatsWithTopic(topic) { // find chats
    return await findChats({ topic: { $regex: topic }});
}

async function getUsersInChat(chatId) {
    return await Chat.findOne({ _id: chatId }, { users: 0 })
        .catch(err => null);
}

async function createNewChat(chat) {
    return await Chat.create(chat)
        .catch(err => null);
}

async function updateChat(chat, chatId) {
    return await Chat.updateOne(
        { _id: chatId },
        chat
    ).catch(err => null);
}

async function removeChat(chatId) {
    return await Chat.remove({ _id: chatId})
        .catch(err => null);
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