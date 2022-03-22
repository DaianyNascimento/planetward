const { Schema, model } = require("mongoose");

const packinglistSchema = new Schema(
  {
    spacesuitQuantity: {
    type: Number,
    required: true,
    },
    foodQuantity: {
      type: Number,
      required: true,
      },
    oxygenQuantity: {
        type: Number,
        required: true,
        },
  },
);

const packinglist = model("Item", packinglistSchema);

module.exports = packinglist;