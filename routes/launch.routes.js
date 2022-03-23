const router = require("express").Router();
const mongoose = require("mongoose");
const ItemModel = require("../models/items.model");
const UserModel = require("../models/User.model");
const { requiredLogin } = require("../middleware/authentication");

/* Use authentication middleware */
router.use("/launch", requiredLogin);

/* GET launch page */
router.get("/launch", async (req, res, next) => {
  const responeFromDb = await userAddedItem.find()

  
if(req.body.spacesuitQuantity >= 1 
  && req.body.foodQuantity >= 4
  && req.body.oxygenQuantity >= 2
  && req.body.fuelQuantity >= 3
  && req.body.waterbottleQuantity >= 4
  ){
    res.redirect("/succes")
  } else {
    res.redirect("/failure")
  }
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


  /* need at least :

    1 spacesuit - 10
    2 oxygen - 20
    4 food - 20
    4 water - 8 
    3 fuel - 30

    88 

    */

  res.render("success");
});


router.get("/success", (req, res, next) => {
  res.render("success");

  const currentItem = await ItemModel.findOne({ userId: req.session.currentUser._id });
  const currentUser = await UserModel.findOneAndUpdate({ userId: req.session.currentUser._id }, { items: currentItem._id }, { new: true });

  res.redirect("/launch");

});

module.exports = router;