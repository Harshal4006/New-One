const Listing = require("./models/listing");
const Reviews = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");

//Authentication Check Middleware...
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        //Store Redirect URL...
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You Must Be Logged In To Create Listing!");
        return res.redirect("/login");
    }
    next();
};

//Save Redirect URL Middleware...
module.exports.savRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
        delete req.session.redirectUrl;
    }
    next();
};

//Listing Ownership Check...
module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);

    if (!listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You Are Not The Owner Of This Listing!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

//Listing Validation Middleware...
module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body, {
        abortEarly: false,
        convert: true,
    });

    if (error) {
        const errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    next();
};

//Review Validation Middleware...
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body, {
        abortEarly: false,
        convert: true,
    });

    if (error) {
        const errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    next();
};

//Review Author Check...
module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Reviews.findById(reviewId);

    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You Are Not The Author Of This Review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};