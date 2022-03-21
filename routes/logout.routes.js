const router = require("express").Router();
const { requiredLogin } = require("../middleware/authentication.js");

router.use("/logout", requiredLogin);

router.get("/logout", (req, res, next) => {
    res.render("logout");
});

router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) return next(err);

        res.redirect("/login");
    });
});

module.exports = router;