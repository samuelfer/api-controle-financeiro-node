const router = require("express").Router();

const PasswordController = require("../controllers/PasswordController"); 

router.post("/auth/passwords", PasswordController.registerPassword);
router.get("/list/passwords", PasswordController.listPassword);
router.put("/update/passwords/:id", PasswordController.updatePassword);
router.delete("/delete/passwords/:id", PasswordController.deletePassword);


module.exports = router;