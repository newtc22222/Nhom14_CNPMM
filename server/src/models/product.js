const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: {
    type: String,
    required: true,
  },  
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category_id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("product", productSchema);