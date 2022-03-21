const router = require("express").Router();


// /* GET launch page */
router.get("/launch", (req, res, next) => {
  res.render("launch");
});

/* post launch page */
router.post("/launch", (req, res, next) => {
  res.render("launch");
});

module.exports = router;