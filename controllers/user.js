const User = require("../models/user.js");

//Signup Route...
module.exports.signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        const newUser = new User({ email, username });
        const registerUser = await User.register(newUser, password);

        req.login(registerUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome To DealHub!");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

//Login Form Route...
module.exports.getLogin = (req, res) => {
    res.render("user/login.ejs");
};

//Login Post Route...
module.exports.postLogin = async (req, res) => {
    req.flash("success", "Welcome Back To DealHub!");

    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

//Logout Route...
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You Are Logged Out!");
        res.redirect("/listings");
    });
};
