<<<<<<< Updated upstream
const ChatModel = require('../models/messages/message.mongo')
const asyncHandler = require('express-async-handler')

const getAllChat = asyncHandler(async (req, res) => {
    const chat = await ChatModel.find({})
    res.send(chat)
})

const AddChat = asyncHandler(async (req, res) => {
    const chat = new ChatModel({
      chatId: req.body.chatId,
      userId: req.body.userId,
      content: req.body.content,
      status: req.body.status
    });
    const newChat = await chat.save();
  
    if (newChat) {
      return res
        .status(201)
        .send({ message: "tạo tin nhắn thành công", data: newChat });
    } else {
      res.send("Không thể tạo tin nhắn");
    }
});

const DeleteChat = asyncHandler(async (req, res) => {
    const chat = await ChatModel.findById({_id: req.params.id})

    if(chat){
        await chat.remove()
        res.send({message: 'xóa message thành công'})
    }else{
        res.send({message: 'message không tồn tại'})
    }
})

module.exports = {
    getAllChat,
    AddChat,
    DeleteChat
}
=======
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
>>>>>>> Stashed changes
