const Certificate = require("../models/Certificate");

module.exports = class CertificateController {
    static async registerCertificate(req, res) {
        const {
            title,
            typeCertificate,
            archive,
            description,
            organization
        } = req.body;

        if (!title) {
            return res.status(422).json({ message: "O título é obrigatório" });
        }

        if (!typeCertificate) {
            return res.status(422).json({ message: "O tipo do certificado é obrigatório" });
        }

        if (!archive) {
            return res.status(422).json({ message: "O arquivo do certificado é obrigatório" });
        }

        const certificateSave = new Certificate({
            title,
            typeCertificate,
            archive,
            description,
            organization
        });

        try {
            await certificateSave.save();
            res.status(201).json({ message: "Cadastro realizado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Ocorreu um erro ao tentar cadastrar" });
        }
    }

    static async listCertificate(req, res) {
        Certificate.find().then(list => {
            res.status(200).json({ list });
        });
    }

    static async updateCertificate(req, res) {
        try {
            const id = req.params.id;
            const certificate = await Certificate.findByIdAndUpdate(id, req.body, {
                new: true
            });
            res.status(200).json({ certificate });

        } catch (error) {
            res.status(500).json({ message: "Erro ao tentar atualizar" });
        }
    }

    static async deleteCertificate(req, res) {
        try {
            const id = req.params.id;
            const deleteRegister = await Certificate.findByIdAndDelete(id);
            if (deleteRegister) {
                res.status(200).json({ message: "Registro excluído com sucesso" });
            }

        } catch (error) {
            res.status(500).json({ message: "Erro ao tentar excluir o registro" });
        }
    }
}