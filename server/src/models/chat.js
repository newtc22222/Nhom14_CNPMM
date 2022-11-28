const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  id: {
    type: String,
    required: true,
  }, 
  user_id: {
    type: String,
    required: true,
  },  
  content: {
    type: String,
    required: true,
    },  
  time_created: {
    type: Date,
    required: true
},
});
module.exports = mongoose.model("chat", chatSchema);