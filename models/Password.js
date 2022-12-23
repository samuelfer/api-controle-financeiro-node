const mongoose = require("mongoose");

const Password = mongoose.model("Password", {
    title: String,
    user: String,
    password: String,
    description: String
});

module.exports = Password;