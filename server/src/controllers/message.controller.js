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
