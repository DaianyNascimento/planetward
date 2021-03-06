// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const capitalized = require("./utils/capitalized");
const projectName = "planetward";

app.locals.appTitle = `${capitalized(projectName)} `;


// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

const signup = require("./routes/signup.routes");
app.use(signup);

const login = require("./routes/login.routes");
app.use(login);

const logout = require("./routes/logout.routes");
app.use(logout);

const profilepage = require("./routes/profilepage");
app.use(profilepage);

const journeypage = require("./routes/journey.routes");
app.use(journeypage);

const launch = require("./routes/launch.routes");
app.use(launch);

const success = require("./routes/success.routes");
app.use(success);

const failure = require("./routes/failure.routes");
app.use(failure);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
