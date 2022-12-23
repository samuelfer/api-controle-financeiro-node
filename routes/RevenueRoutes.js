const router = require("express").Router();

const RevenueController = require("../controllers/RevenueController");

router.post("/auth/revenues", RevenueController.registerRevenue);
router.get("/list/revenues", RevenueController.listRevenue);
router.put("/update/revenues/:id", RevenueController.updateRevenue);



module.exports = router;
