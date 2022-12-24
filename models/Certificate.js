const mongoose = require("mongoose");

const Certificate = mongoose.model("Certificate", {
    title: String,
    typeCertificate: String,
    archive: String,
    description: String,
    organization: String
});

module.exports = Certificate;