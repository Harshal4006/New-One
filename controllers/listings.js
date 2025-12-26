const Listing = require("../models/listing.js");

// Handle listing index with search and category filter
module.exports.index = async (req, res) => {
    const { search, category } = req.query;

    let query = {};

    // Apply text search on multiple fields
    if (search) {
        query.$or = [
            { title: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } }
        ];
    }

    // Filter listings by category
    if (category) {
        query.category = category;
    }

    const allListings = await Listing.find(query);

    res.render("listings/index.ejs", {
        allListings,
        search,
        category
    });
};

// Render form to create a new listing
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

// Show single listing with reviews and owner data
module.exports.showData = async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: { path: "author" },
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing You Requested For Does Not Exist!");
        return res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });
};

// Create a new listing with uploaded image
module.exports.createListing = async (req, res, next) => {
    const url = req.file.path;
    const filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

// Render edit form for an existing listing
module.exports.editListing = async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing You Requested For Does Not Exist!");
        return res.redirect("/listings");
    }

    res.render("listings/edit.ejs", { listing });
};

// Update listing details and image if provided
module.exports.updateListing = async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findByIdAndUpdate(id, {
        ...req.body.listing,
    });

    if (typeof req.file !== "undefined") {
        const url = req.file.path;
        const filename = req.file.filename;

        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

// Delete a listing by id
module.exports.deleteListing = async (req, res) => {
    const { id } = req.params;

    await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};