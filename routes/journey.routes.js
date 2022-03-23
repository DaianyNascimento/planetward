const router = require("express").Router();
const UserModel = require("../models/User.model");
const { requiredLogin } = require("../middleware/authentication");

/* Use authentication middleware */
router.use("/journeypage", requiredLogin);

/* GET journey page */
router.get("/journeypage", async (req, res, next) => {
  const user = await UserModel.findOne({ username: req.session.currentUser.username });

  //console.log(user.username);
  res.render("journeypage", { username: user.username });
});

module.exports = router;