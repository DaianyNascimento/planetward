const router = require("express").Router();


// /* GET launch page */
router.get("/launch", (req, res, next) => {
  res.render("launch");
});

/* post launch page */
router.post("/launch", (req, res, next) => {
    console.log(req.body);
  res.redirect("/launch");
});

module.exports = router;