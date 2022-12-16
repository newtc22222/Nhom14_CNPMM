const {
    getAllChats,
    findChatWithId,
    getChatsOfUser,
    getChatsWithTopic, // filter
    getUsersInChat,
    createNewChat,
    updateChat,
    removeChat
} = require('../models/chats/chat.model');

const {
    getPagination
} = require('../services/query')

async function httpGetAllChats (req, res) {
    const chats = await getAllChats();

    if(chats) {
        return res.status(200).json(chats);
    }
    return res.status(404).json({ error: "Cannot find any chat!" });
}

async function httpFindChatWithId (req, res) {
    const chatId = req.params.id;
    const chat = await findChatWithId(chatId);

    if(chat) {
        return res.status(200).json(chat);
    }
    return res.status(404).json({ error: "Cannot find chat with id=" + chatId });
}

async function httpGetChatsOfUser (req, res) {
    const userId = req.params.id;
    const chats = await getChatsOfUser(userId);

    if(chats) {
        return res.status(200).json(chats);
    }
    return res.status(404).json({ error: "Cannot find any chat in this user!" });
}

async function httpGetUsersInChat (req, res) {
    const chatId = req.params.id;
    const userIdList = await getUsersInChat(chatId);

    if(userIdList) {
        return res.status(200).json(userIdList);
    }
    return res.status(404).json({ error: "Cannot find any user in this chat!" });
}

async function httpCreateNewChat (req, res) {
    const newChat = {
        topic: req.body.topic,
        users: req.body.users
    };

    const result = await createNewChat(newChat);
    if(result) {
        return res.status(201).json(result);
    }
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpUpdateChat (req, res) {
    const chatId = req.params.id;
    const existsChat = await findChatWithId(chatId);
    
    if(!existsChat) {
        return res.status(404).json({ error: "Cannot find this chat!" });
    }

    const newChat = {
        topic: req.body.topic,
        users: req.body.users
    };

    const result = await updateChat(newChat, chatId);
    if(result) {
        return res.status(200).json(result);
    }
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpRemoveChat (req, res) {
    const chatId = req.params.id;
    const existsChat = await findChatWithId(chatId);
    
    if(!existsChat) {
        return res.status(404).json({ error: "Cannot find this chat!" });
    }

    const result = await removeChat(chatId);
    if(result) {
        return res.status(200).json(result);
    }
    return res.status(501).json({ error: "Cannot remove this chat!" });
}

module.exports = {
    httpGetAllChats,
    httpFindChatWithId,
    httpGetChatsOfUser,
    httpGetUsersInChat,
    httpCreateNewChat,
    httpUpdateChat,
    httpRemoveChat
}
