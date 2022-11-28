const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  id: {
    type: String,
    required: true,
  },  
  user_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  sumary: {
    type: String,
    required: true,
  },
  date_post: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("blog", blogSchema);