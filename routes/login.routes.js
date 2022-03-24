const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcrypt = require("bcryptjs");
const { requiredLogout } = require("../middleware/authentication");

/* Use authentication middleware */
router.use("/login", requiredLogout);

/* GET login page */
router.get("/login", (req, res, next) => {
    res.render("login");
});

/* POST login page */
router.post("/login", async (req, res, next) => {
    try {
        const user = await UserModel.findOne({ username: req.body.username });
        //console.log(user);
        const hashFromDb = user.password;
        //console.log(hashFromDb);
        const passwordCorrect = await bcrypt.compare(req.body.password, hashFromDb);
        //console.log(passwordCorrect ? "Yes" : "No");

        if (!passwordCorrect) {
            throw Error("Password incorrect");
        }
        req.session.currentUser = user;
        //console.log(req.session.currentUser, "<<<< current user");
        res.redirect("/profilepage");
    }
    catch (err) {
        res.render("login", { error: "Wrong username or password" });
    }
});

module.exports = router;