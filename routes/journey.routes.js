const router = require("express").Router();


/* GET journey page */
router.get("/journeypage", (req, res, next) => {
  res.render("journeypage");
});


// router.post("/journeypage", (req, res, next) => {
//   res.render("journeypage");
// });

module.exports = router;