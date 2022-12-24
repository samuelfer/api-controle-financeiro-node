const router = require("express").Router();

const RevenueController = require("../controllers/RevenueController");

router.post("/create/revenues", RevenueController.registerRevenue);
router.get("/list/revenues", RevenueController.listRevenue);
router.put("/update/revenues/:id", RevenueController.updateRevenue);
router.delete("/delete/revenues/:id", RevenueController.deleteRevenue);


module.exports = router;
