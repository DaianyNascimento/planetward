const router = require("express").Router();
const { requiredLogin } = require("../middleware/authentication");

/* GET home page */
router.get("/success", requiredLogin, (req, res, next) => {
  res.render("success");
});

module.exports = router;