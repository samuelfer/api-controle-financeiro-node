const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "uploads");
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const upload = multer({
    storage,
    fileFilter(req, file, callback) {
        if (!file.originalname.match(/\.(png|jpg|JPEG|PNG)$/)) {
            return callback(Error('Tipo de arquivo inválido, permitido apenas jpg ou png!'))
        }
        callback(null, true);
    }
});

const AuthRegisterUserController = require("../controllers/AuthRegisterUserController");

router.get("/", AuthRegisterUserController.init);
router.post("/auth/register/user", upload.single("image"), AuthRegisterUserController.registerUser);

nodule.exports = router;