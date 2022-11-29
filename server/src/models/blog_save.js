const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSaveSchema = new Schema({
  blog_id: {
    type: String,
    required: true,
  },  
  user_id: {
    type: String,
    required: true
},
});
module.exports = mongoose.model("blog_save", blogSaveSchema);