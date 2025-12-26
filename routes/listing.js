const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingControllers = require("../controllers/listings.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

//Listing Routes...

//Index And Create Listing Route...
router.route("/")
    .get(wrapAsync(listingControllers.index))
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingControllers.createListing)
    );

//New Listing Form Route...
router.get("/new", isLoggedIn, listingControllers.renderNewForm);

//Show Update And Delete Listing Route...
router.route("/:id")
    .get(wrapAsync(listingControllers.showData))
    .put(
        isLoggedIn,
        isOwner,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingControllers.updateListing)
    )
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingControllers.deleteListing)
    );

//Edit Listing Form Route...
router.get(
    "/:id/edit",
    isLoggedIn,
        isOwner,
    wrapAsync(listingControllers.editListing)
);

module.exports = router;