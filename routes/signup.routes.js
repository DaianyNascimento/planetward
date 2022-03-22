const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcrypt = require("bcryptjs");
const { requiredLogout } = require("../middleware/authentication");

/* Use authentication middleware */
router.use("/signup", requiredLogout);

/* GET signup page */
router.get("/signup", (req, res, next) => {
    res.render("signup");
});

/* POST signup page */
router.post("/signup", async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(password, salt);

        const user = {
            username: username,
            password: hash,
        }

        await UserModel.create(user);
        res.redirect("/login");
    }

    catch (err) {
        console.log(err);
        res.render("signup", { error: "you already have an account" })
    }
});

module.exports = router;
