const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userFollowSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },  
  user_follower_id: {
    type: String,
    required: true
},
});
module.exports = mongoose.model("user_follow", userFollowSchema);