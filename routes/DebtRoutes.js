const router = require("express").Router();

const DebtController = require("../controllers/DebtController");

router.post("/auth/debts", DebtController.registerDebt);

module.exports = router;