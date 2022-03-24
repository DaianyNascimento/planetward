const router = require("express").Router();
const mongoose = require("mongoose");
const ItemModel = require("../models/items.model");
const UserModel = require("../models/User.model");
const { requiredLogin } = require("../middleware/authentication");

/* Use authentication middleware */
router.use("/profilepage", requiredLogin);

/* GET profile page and the current item from db*/
router.get("/profilepage", async (req, res, next) => {
  //console.log(req.session.currentUser);
  const currentItem = await ItemModel.findOne({ userId: req.session.currentUser._id });
  //console.log(currentItem);
  
  res.render("profilepage", { currentItem: currentItem });
});

/* GET edit Item */
router.get('/items/:id/edit', async (req, res, next) => {
  const itemId = mongoose.Types.ObjectId(req.params.id);
  const items = await ItemModel.findById(itemId);
  const user = await UserModel.findOne({ username: req.session.currentUser.username });
  const combinedUserAndItems = {
    username: user.username,
    items: items,
  }
  console.log(combinedUserAndItems);
  res.render("journeypage", { combinedUserAndItems });
});


/* POST edited item */
router.post('/items/:id/edit', async (req, res, next) => {
 try{ 
   
    const itemId = mongoose.Types.ObjectId(req.params.id);
    //console.log(">>> item id to update", itemId);
    // console.log(req.params);
    await ItemModel.findByIdAndUpdate(itemId, { ...req.body });
    const currentItem = await ItemModel.findOne({ userId: req.session.currentUser._id });
    
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
  }
 catch(err){
   console.log(err, "<<<<")
  res.redirect("/profilepage");
 }
});




/* DELETE items */
router.post('/item/:id/delete', async (req, res, next) => {
  const itemId = mongoose.Types.ObjectId(req.params.id);
  console.log("item id to delete", itemId);

  await ItemModel.deleteMany({ userId: { $in: itemId } });
  console.log("Successfully deleted");
  res.redirect("/profilepage");
});

module.exports = router;