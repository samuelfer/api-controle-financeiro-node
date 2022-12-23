const router = require("express").Router();

const LoginController = require("../controllers/LoginController");

router.post("/auth/login", LoginController.login);
router.get("/download/image", LoginController.downloadImage);


module.exports = router;