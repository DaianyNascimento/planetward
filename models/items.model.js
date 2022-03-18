const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    itemName: {
      type: String,
      unique: true,
      required: true,
    },
    itemQuantity: {
    type: Number,
    required: true,
    },
    },
);

const Item = model("Item", itemSchema);

module.exports = Item;