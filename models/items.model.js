const { Schema, model } = require("mongoose");

const packinglistSchema = new Schema(
  {
    spacesuitQuantity: {
      type: Number,
    },
    foodQuantity: {
      type: Number,
    },
    oxygenQuantity: {
      type: Number,
    },
    fuelQuantity: {
      type: Number,
    },
    solarpanelQuantity: {
      type: Number,
    },
    sproutQuantity: {
      type: Number,
    },
    waterbottleQuantity: {
      type: Number,
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const packinglist = model("Item", packinglistSchema);

module.exports = packinglist;