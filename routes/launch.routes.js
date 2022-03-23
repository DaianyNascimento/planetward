const router = require("express").Router();
const mongoose = require("mongoose");
const ItemModel = require("../models/items.model");
const UserModel = require("../models/User.model");
const { requiredLogin } = require("../middleware/authentication");

/* Use authentication middleware */
router.use("/launch", requiredLogin);

/* GET launch page */
router.get("/launch", async (req, res, next) => {
  res.render("launch");
});

/* POST launch page */
router.post("/launch", async (req, res, next) => {
  console.log(req.body);

  const userAddedItem = new ItemModel({
    spacesuitQuantity: req.body.spacesuitQuantity,
    foodQuantity: req.body.foodQuantity,
    oxygenQuantity: req.body.oxygenQuantity,
    fuelQuantity: req.body.fuelQuantity,
    solarpanelQuantity: req.body.solarpanelQuantity,
    sproutQuantity: req.body.sproutQuantity,
    waterbottleQuantity: req.body.waterbottleQuantity,
    userId: req.session.currentUser._id,
  });

  await userAddedItem.save();

  const currentItem = await ItemModel.findOne({ userId: req.session.currentUser._id });
  const currentUser = await UserModel.findOneAndUpdate({ userId: req.session.currentUser._id }, { items: currentItem._id }, { new: true });

  res.redirect("/launch");
});

module.exports = router;