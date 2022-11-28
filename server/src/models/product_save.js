const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSaveSchema = new Schema({
  product_id: {
    type: String,
    required: true,
  },  
  user_id: {
    type: String,
    required: true
},
});
module.exports = mongoose.model("product_save", productSaveSchema);