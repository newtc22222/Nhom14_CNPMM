const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const statusSchema = new Schema({
  send: {
    type: String,
    required: true,
  }, 
  edited: {
    type: String,
    required: true,
  },  
  remove: {
    type: String,
    required: true
},
});
module.exports = mongoose.model("status", statusSchema);