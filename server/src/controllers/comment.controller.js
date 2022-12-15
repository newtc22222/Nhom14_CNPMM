<<<<<<< Updated upstream
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
=======
const {
    getAllComments, // co the bo qua
    findCommentWithId,
    getCommentsOfBlog,
    getCommentsOfUser,
    findCommentsByContent, // filter
    createNewComment,
    updateComment,
    deleteComment
} = require('../models/comments/comment.model');

const {
    getPagination
} = require('../services/query')

async function httpGetAllComments (req, res) {
    const comments = await getAllComments();
    if(comments) {
        return res.status(200).json(comments);
    }
    return res.status(404).json({ error: "Not found any comment!"});
}

async function httpFindCommentWithId (req, res) {
    const commentId = req.params.id;
    const comment = await findCommentWithId(commentId);
    if(comment) {
        return res.status(200).json(comment);
    }
    return res.status(404).json({ error: "Cannot find comment with id=" + commentId});
}

async function httpGetCommentsOfBlog (req, res) {
    const blogId = req.params.id;
    const comments = await getCommentsOfBlog(blogId);
    if(comments) {
        return res.status(200).json(comments);
    }
    return res.status(404).json({ error: "Not found any comment!"});
}

async function httpGetCommentsOfUser (req, res) {
    const userId = req.params.id;
    const comments = await getCommentsOfUser(userId);
    if(comments) {
        return res.status(200).json(comments);
    }
    return res.status(404).json({ error: "Not found any comment!"});
}

async function httpCreateNewComment (req, res) {
    const newComment = {
        rootCommentId: req.body.rootCommentId,
        userId: req.body.userId,
        blogId: req.body.blogId,
        content: req.body.content
    };

    const result = await createNewComment(newComment);
    if(result) {
        return res.status(201).json({result});
    }
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpUpdateComment (req, res) {
    const commentId = req.params.id;
    const existComment = await findCommentWithId(commentId);
    if(!existComment) {
        return res.status(404).json({ error: 'Comment not found!' });
    }

    const newComment = {
        rootCommentId: req.body.rootCommentId,
        userId: req.body.userId,
        blogId: req.body.blogId,
        content: req.body.content
    };
    
    const result = await updateComment(newComment, commentId);
    if(result) {
        return res.status(200).json({result});
    }
    return res.status(501).json({ error: "Invalid data!" });
}

async function httpDeleteComment (req, res) {
    const commentId = req.params.id;
    const existComment = await findCommentWithId(commentId);
    if(!existComment) {
        return res.status(404).json({ error: 'Comment not found!' });
    }

    const result = await deleteComment(commentId);
    if(result) {
        return res.status(200).json({result});
    }
    return res.status(501).json({ error: "Failed to delete this comment!" });
}

module.exports = {
    httpGetAllComments,
    httpFindCommentWithId,
    httpGetCommentsOfBlog,
    // httpGetCommentsOfUser,
    httpCreateNewComment,
    httpUpdateComment,
    httpDeleteComment
}
>>>>>>> Stashed changes
