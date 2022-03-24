const { Schema, model } = require("mongoose");

const packinglistSchema = new Schema(
  {
    spacesuitQuantity: {
      type: Number,
      default: 0,
    },
    foodQuantity: {
      type: Number,
      default: 0,
    },
    oxygenQuantity: {
      type: Number,
      default: 0,
    },
    fuelQuantity: {
      type: Number,
      default: 0,
    },
    solarpanelQuantity: {
      type: Number,
      default: 0,
    },
    sproutQuantity: {
      type: Number,
      default: 0,
    },
    waterbottleQuantity: {
      type: Number,
      default: 0,
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const packinglist = model("Item", packinglistSchema);

module.exports = packinglist;