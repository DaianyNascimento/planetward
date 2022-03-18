const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcrypt = require("bcryptjs");

/* GET login page */
router.get("/login", (req, res, next) => {
  res.render("login");
});

module.exports = router;
    
/* POST login page */
router.post("/login",  async (req, res, next) => {
    try{
        const user = await UserModel.findOne({ username: req.body.username });
        const hashFromDb = user.password;
        const passwordCorrect = await bcrypt.compare(req.body.password, hashFromDb);
            console.log(passwordCorrect ? "Yes" : "No");
            if (!passwordCorrect) {
                throw Error("Password incorrect");
            }
            req.session.currentUser = user;
            res.redirect("/profilepage");
    }
        catch(err){
        res.render("login", { error: "Wrong username or password" });
        }
    });

    
module.exports = router;