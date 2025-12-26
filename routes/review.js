const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Reviews = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewControllers = require("../controllers/reviews.js");

//Review Routes...

//Create Review Route...
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewControllers.createReviews)
);

//Delete Review Route...
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewControllers.deleteReviews)
);

module.exports = router;
