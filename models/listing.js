const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Reviews = require("./review.js");

//Listing Schema Definition...
const listingSchema = new Schema({
    title: {
        type: String,
    },
    description: String,
    image: {
        url: String,
        filename: String,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    category: {
        type: String,
        required: true
    },
});

//Cascade Delete Reviews On Listing Removal...
listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Reviews.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;