const mongoose = require("mongoose");

const Debt = mongoose.model("Debt", {
    user: {
        title: String,
        month: {
            title: String,
            listMonth: {
                debt: String,
                category: String,
                value: String,
                expirationDate: String,
            }
        }
    }
});

module.exports = Debt;