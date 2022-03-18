const router = require("express").Router();


/* GET profile page */
router.get("/profilepage", (req, res, next) => {
  res.render("profilepage");
});


module.exports = router;