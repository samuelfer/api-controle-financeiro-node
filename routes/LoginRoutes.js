const router = require("express").Router();

const LoginController = require("../controllers/LoginController");

router.post("/auth/login", LoginController.login);

module.exports = router;