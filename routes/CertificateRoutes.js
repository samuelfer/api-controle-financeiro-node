const router = require("express").Router();

const CertificateController = require("../controllers/CertificateController"); 

router.post("/auth/certificates", CertificateController.registerCertificate);
router.get("/list/certificates", CertificateController.listCertificate);
router.put("/update/certificates/:id", CertificateController.updateCertificate);
router.delete("/delete/certificates/:id", CertificateController.deleteCertificate);


module.exports = router;