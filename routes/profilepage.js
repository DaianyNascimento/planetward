const router = require("express").Router();
const mongoose = require("mongoose");
const ItemModel = require("../models/items.model");
const { requiredLogin } = require("../middleware/authentication");

/* Use authentication middleware */
router.use("/profilepage", requiredLogin);

/* GET profile page and the items from db*/
router.get("/profilepage", async (req, res, next) => {
  //console.log(req.session.currentUser);
  const currentItem = await ItemModel.findOne({ userId: req.session.currentUser._id });

  console.log(currentItem);
  res.render("profilepage", { currentItem: currentItem });
});

/* Edit Item */
/*router.get('/item/:id/edit', async (req, res, next) => {
  const itemId = mongoose.Types.ObjectId(req.params.id);
  const item = await Item.findById(itemId);
  res.render("items/edit", { item }); // not working yet - where edit items?
});*/

/* Submit edited item */
/*router.post('/item/:id/edit', async (req, res, next) => {
  const itemId = mongoose.Types.ObjectId(req.params.id);
  await Item.findByIdAndUpdate(itemId, { ...req.body });
  res.redirect("/profilepage");
});*/

/* DELETE items */
router.post('/item/:id/delete', async (req, res, next) => {
  const itemId = mongoose.Types.ObjectId(req.params.id);
  console.log("item id to delete", itemId);

  await ItemModel.findByIdAndDelete(itemId);
  console.log("Successfully deleted");
});

module.exports = router;