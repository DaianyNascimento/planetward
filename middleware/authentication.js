const requiredLogin = (req, res, next) => {
    if (!req.session.currentUser) {
        res.redirect("/login");
        return;
    }

    next();
};


// function requiredLogin(req, res, next) {
//     if (req.session.currentUser) {
//       next();
//       return;
//     } else {
//       res.redirect("/login");
//     }
//   }
  

const requiredLogout = (req, res, next) => {
    if (req.session.currentUser) {
        res.redirect("/profilepage");
        return;
    }

    next();
};

const authenticationFunctions = {
    requiredLogin,
    requiredLogout,
}

module.exports = authenticationFunctions;