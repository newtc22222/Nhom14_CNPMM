const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogProductSchema = new Schema({
  blog_id: {
    type: String,
    required: true,
  },  
  product_id: {
    type: String,
    required: true
},
});
module.exports = mongoose.model("blog_product", blogProductSchema);