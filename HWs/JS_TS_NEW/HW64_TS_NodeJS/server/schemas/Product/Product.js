const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  newPrice: Number,
  oldPrice: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
