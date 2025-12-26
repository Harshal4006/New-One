const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { savRedirectUrl } = require("../middleware.js");

const userControllers = require("../controllers/user.js");

//User Authentication Routes...

//Signup Routes...
router
    .route("/signup")
    .get((req, res) => {
        res.render("user/signup.ejs");
    })
    .post(wrapAsync(userControllers.signup));

//Login Routes...
router
    .route("/login")
    .get(userControllers.getLogin)
    .post(
        savRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true,
        }),
        userControllers.postLogin
    );

//Logout Route...
router.get("/logout", userControllers.logout);

module.exports = router;
