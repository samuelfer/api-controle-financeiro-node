const router = require("express").Router();

const DebtController = require("../controllers/DebtController");

router.post("/create/debts", DebtController.registerDebt);
router.get("/list/debts", DebtController.listDebt);
router.put("/update/debts/:id", DebtController.updateDebt);
router.delete("/delete/debts/:id", DebtController.deleteDebt);

module.exports = router;