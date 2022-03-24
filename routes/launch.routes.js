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

  try {
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

    // JUST GET THE FIRST ITEM FROM DE DB AND POPULATE
    const currentItem = await ItemModel.findOne({ userId: req.session.currentUser._id });
    const currentUser = await UserModel.findOneAndUpdate({ userId: req.session.currentUser._id }, { items: currentItem._id }, { new: true }).populate('items');
    //console.log(currentUser);

    //console.log(req.session.currentUser);
    //console.log(">>>>>> current user populated: ", currentUser);
    if (currentItem.spacesuitQuantity >= 1
      && currentItem.foodQuantity >= 4
      && currentItem.oxygenQuantity >= 2
      && currentItem.fuelQuantity >= 3
      && currentItem.waterbottleQuantity >= 4
    ) {
      res.redirect("/success");
    } else {
      res.redirect("/failure");
    }
  } catch (err) {
    res.render("profilepage", { error: "You have already created an item!" });
  }
});

module.exports = router;

/* need at least :
  1 spacesuit - 10
  2 oxygen - 20
  4 food - 20
  4 water - 8 
  3 fuel - 30
  */
