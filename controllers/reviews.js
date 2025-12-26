const Reviews = require("../models/review.js");
const Listing = require("../models/listing.js");

//Create Review Route...
module.exports.createReviews = async (req, res) => {
    const listing = await Listing.findById(req.params.id);

    const newReview = new Reviews(req.body.review);
    newReview.author = req.user._id;

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success", "New Reviews Created!");
    res.redirect(`/listings/${listing._id}`);
};

//Delete Review Route...
module.exports.deleteReviews = async (req, res) => {
    const { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, {
        $pull: { reviews: reviewId },
    });

    await Reviews.findByIdAndDelete(reviewId);

    req.flash("success", "Reviews Deleted!");
    res.redirect(`/listings/${id}`);
};
