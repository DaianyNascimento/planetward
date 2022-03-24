const { Schema, model } = require("mongoose");

const packinglistSchema = new Schema(
  {
    spacesuitQuantity: {
      type: Number,
      unique: true,
    },
    foodQuantity: {
      type: Number,
      unique: true,
    },
    oxygenQuantity: {
      type: Number,
      unique: true,
    },
    fuelQuantity: {
      type: Number,
      unique: true,
    },
    solarpanelQuantity: {
      type: Number,
      unique: true,
    },
    sproutQuantity: {
      type: Number,
      unique: true,
    },
    waterbottleQuantity: {
      type: Number,
      unique: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const packinglist = model("Item", packinglistSchema);

module.exports = packinglist;