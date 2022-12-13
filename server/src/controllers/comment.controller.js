const CommentModel = require('../models/comments/comment.mongo')
const asyncHandler = require('express-async-handler')

const getAllComment = asyncHandler(async (req, res) => {
    const comment = await CommentModel.find({})
    res.send(comment)
})

const AddComment = asyncHandler(async (req, res) => {
    const comment = new CommentModel({
      rootCommentId: req.body.rootCommentId,
      userId: req.body.userId,
      blogId: req.body.blogId,
      content: req.body.content
    });
    const newComment = await comment.save();
  
    if (newComment) {
      return res
        .status(201)
        .send({ message: "tạo tin nhắn thành công", data: newComment });
    } else {
      res.send("Không thể tạo tin nhắn");
    }
});

const DeleteComment = asyncHandler(async (req, res) => {
    const comment = await CommentModel.findById({_id: req.params.id})

    if(comment){
        await comment.remove()
        res.send({message: 'xóa message thành công'})
    }else{
        res.send({message: 'message không tồn tại'})
    }
})

module.exports = {
    getAllComment,
    AddComment,
    DeleteComment
}
