const requiredLogin = (req, res, next) => {
    if (!req.session.currentUser) {
        res.redirect("/login");
        return;
    }

    next();
};

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