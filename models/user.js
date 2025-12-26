const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

//User Schema Definition...
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

//Passport Local Authentication Plugin...
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
