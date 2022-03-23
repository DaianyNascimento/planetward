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
    fuelQuantity: {
      type: Number,
      required: true,
    },
    solarpanelQuantity: {
      type: Number,
      required: true,
    },
    sproutQuantity: {
      type: Number,
      required: true,
    },
    waterbottleQuantity: {
      type: Number,
      required: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const packinglist = model("Item", packinglistSchema);

module.exports = packinglist;