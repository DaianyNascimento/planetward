const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcrypt = require("bcryptjs");
const { genSalt } = require("bcryptjs"); // you forgot to generate the salt :)

router.get("/signup", (req, res, next) => {
    res.render("signup");
});

router.post("/signup", async (req, res, next) => {
   try{
    const { username, password } = req.body;

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    const user = {
        username: username,
        password: hash,
    }

    await UserModel.create(user);
    res.redirect("/login"); // this needed to redirect to login :)
    }
    
    catch(err){
        console.log(err);
        res.render("signup", {error: "you already have an account"})
    }
});

module.exports = router;
