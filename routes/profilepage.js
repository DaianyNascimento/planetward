const router = require("express").Router();
const { requiredLogin } = require("../middleware/authentication");

router.use("/profilepage", requiredLogin);

/* GET profile page */
router.get("/profilepage", (req, res, next) => {
  res.render("profilepage");
});


module.exports = router;