const mongoose = require("mongoose");

const Revenue = mongoose.model("Revenue", {
    user: {
        title: String,
        month: {
            title: String,
            listMonth: {
                typeRevenue: String,
                value: String,
                dateEntry: String,

            }
        }
    }
});

module.exports = Revenue;