const router = require("express").Router();

const DebtController = require("../controllers/DebtController");

router.post("/auth/debts", DebtController.registerDebt);
router.get("/list/debts", DebtController.listDebt);

module.exports = router;