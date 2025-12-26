const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGOOSE_URL = "mongodb://127.0.0.1:27017/DealHub";

//Database Connection...
async function main() {
    await mongoose.connect(MONGOOSE_URL);
    console.log("Connected To DB!");
}

//Database Initialization...
const initDB = async () => {
    //Remove Existing Listings...
    await Listing.deleteMany({});

    //Prepare Seed Data...
    const updatedData = initData.data.map(item => ({
    ...item,
    category: item.category || "city", 
    image: {
        url: item.image.url,
        filename: item.image.filename || "listingimage"
    },
    owner: new mongoose.Types.ObjectId("694678cd3a15b83c3d454e7d")
}));


    //Insert New Listings...
    await Listing.insertMany(updatedData);
    console.log("Data Was Initialized.");
};

//Run Seed Script...
main()
    .then(() => initDB())
    .catch(err => console.error(err));
