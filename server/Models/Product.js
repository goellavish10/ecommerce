const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    img: {
        type: String
    },
    price: {
        type: String,
    },
    cat: {
        type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
