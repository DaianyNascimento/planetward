const Item = require("../models/items.model");
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    items: { type: Schema.Types.ObjectId, ref: 'Item' },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
