const router = require("express").Router();
const UserModel = require("../models/User.model");
const { requiredLogin } = require("../middleware/authentication");

/* Use authentication middleware */
router.use("/journeypage", requiredLogin);

/* GET journey page */
router.get("/journeypage", async (req, res, next) => {
  const user = await UserModel.findOne({ username: req.session.currentUser.username });
  res.render("journeypage", { username: user.username });
});

 
router.post('/currentUser/:id/delete', async (req, res, next) => {
  const itemId = mongoose.Types.ObjectId(req.params.id);
  console.log("itemId to delete", itemId);

  const currentItem = await ItemModel.findOne({ userId: req.session.currentUser._id });
  const currentUser = await UserModel.findOneAndUpdate({ userId: req.session.currentUser._id }, { items: currentItem._id }, { new: true });



  await Item.findByIdAndDelete(itemId);
  console.log("Successfully deleted");

  res.redirect("/profilepage");
});

module.exports = router;