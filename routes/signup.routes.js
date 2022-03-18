const router = require("express").Router();

router.get("/signup", (req, res, next) => {
    res.render("signup");
});

module.exports = router;