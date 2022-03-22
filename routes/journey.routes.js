const router = require("express").Router();
const { requiredLogin } = require("../middleware/authentication");

router.use("/journeypage", requiredLogin);

/* GET journey page */
router.get("/journeypage", (req, res, next) => {
  res.render("journeypage", { username: req.session.currentUser });

});

// router.post("/journeypage", (req, res, next) => {
//   res.render("journeypage");
// });

module.exports = router;