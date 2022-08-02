const mongooseProduct = require("mongoose");

const ProductSchema = new mongooseProduct.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
    },
    amount: {
      type: Number,
      default: 1,
    },
    categories: {
      type: Array,
    },
    allKinds: {
      type: Boolean,
      default: false,
    },
    onSale: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongooseProduct.model("Product", ProductSchema);
