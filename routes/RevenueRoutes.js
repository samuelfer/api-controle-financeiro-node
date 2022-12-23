const router = require("express").Router();

const RevenueController = require("../controllers/RevenueController");

router.post("/auth/revenues", RevenueController.registerRevenue);

module.exports = router;
