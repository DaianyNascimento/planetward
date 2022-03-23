const router = require("express").Router();
const { requiredLogin } = require("../middleware/authentication");

/* GET home page */
router.get("/failure", requiredLogin, (req, res, next) => {
  res.render("failure");
});

module.exports = router;