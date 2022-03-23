const router = require("express").Router();
const { requiredLogin } = require("../middleware/authentication");

/* Use authentication middleware */
router.use("/success", requiredLogin);

/* GET home page */
router.get("/success", requiredLogin, (req, res, next) => {
  res.render("success");
});

module.exports = router;