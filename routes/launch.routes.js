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
  
  // const responeFromDb = await ItemModel.findOne(currentItem.spacesuitQuantity);
  // console.log(currentItem.spacesuitQuantity, "<<<<<<" );
  // console.log(currentUser.items.spacesuitQuantity);
  // console.log(req.body.spacesuitQuantity, "-----");
  // console.log(responeFromDb, "-----");
  console.log(req.body, "this is whole item") 
  if(req.body.spacesuitQuantity >= 1 
    && req.body.foodQuantity >= 1
    && req.body.oxygenQuantity >= 1
    && req.body.fuelQuantity >= 1
    && req.body.waterbottleQuantity >= 1
    ){
      res.redirect("/success")
    } else {
      console.log("error from failure")
      res.redirect("/failure")
    }
    console.log(req.body.spacesuitQuantity, "<<<<<<")
});



module.exports = router;

  /* need at least :

    1 spacesuit - 10
    2 oxygen - 20
    4 food - 20
    4 water - 8 
    3 fuel - 30

    88 

    */