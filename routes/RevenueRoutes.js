const router = require("express").Router();

const RevenueController = require("../controllers/RevenueController");

router.post("/auth/revenues", RevenueController.registerRevenue);
router.get("/list/revenues", RevenueController.listRevenue);


module.exports = router;
