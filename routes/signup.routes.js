const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcrypt = require("bcryptjs");

router.get("/signup", (req, res, next) => {
    res.render("signup");
});

router.post("/signup", async (req, res, next) => {
    const { username, password } = req.body;

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    const user = {
        username,
        password: hash,
    }

    await UserModel.create(user);
    res.render("profilepage");
});

module.exports = router;
