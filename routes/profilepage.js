const router = require("express").Router();
const mongoose = require("mongoose");
const ItemModel = require("../models/items.model");
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
  //console.log(items);
  res.render("journeypage", { items });
});

/* POST edited item */
router.post('/items/:id/edit', async (req, res, next) => {
  const itemId = mongoose.Types.ObjectId(req.params.id);
  //console.log(">>> item id to update", itemId);
  console.log(req.params);
  await ItemModel.findByIdAndUpdate(itemId, { ...req.body });
  res.redirect("/profilepage");
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