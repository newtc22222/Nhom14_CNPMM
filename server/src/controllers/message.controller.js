<<<<<<< Updated upstream
const MessageModel = require('../models/messages/message.mongo')
const asyncHandler = require('express-async-handler')

const getAllMessage = asyncHandler(async (req, res) => {
    const message = await MessageModel.find({})
    res.send(message)
})

const AddMessage = asyncHandler(async (req, res) => {
    const message = new MessageModel({
      chatId: req.body.chatId,
      userId: req.body.userId,
      content: req.body.content,
      status: req.body.status
    });
    const newMessage = await message.save();
  
    if (newMessage) {
      return res
        .status(201)
        .send({ message: "tạo tin nhắn thành công", data: newMessage });
    } else {
      res.send("Không thể tạo tin nhắn");
    }
});

const DeleteMessage = asyncHandler(async (req, res) => {
    const message = await MessageModel.findById({_id: req.params.id})

    if(message){
        await message.remove()
        res.send({message: 'xóa message thành công'})
    }else{
        res.send({message: 'message không tồn tại'})
    }
})

module.exports = {
    getAllMessage,
    AddMessage,
    DeleteMessage
}
=======
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
>>>>>>> Stashed changes
