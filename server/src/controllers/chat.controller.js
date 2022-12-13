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
