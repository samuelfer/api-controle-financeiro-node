const Password = require("../models/Password");

module.exports = class PasswordController {
    static async registerPassword(req, res) {
        const {
            title,
            user,
            password,
            description
        } = req.body;

        if (!title) {
            return res.status(422).json({ message: "O título é obrigatório" });
        }

        if (!user) {
            return res.status(422).json({ message: "O usuário é obrigatório" });
        }

        if (!password) {
            return res.status(422).json({ message: "A senha é obrigatória" });
        }

        const passwordSave = new Password({
            title,
            user,
            password,
            description
        });

        try {
            await passwordSave.save();
            res.status(201).json({ message: "Cadastro realizado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Ocorreu um erro ao tentar cadastrar" });
        }
    }

    static async listPassword(req, res) {
        Password.find().then(list => {
            res.status(200).json({ list });
        });
    }

    static async updatePassword(req, res) {
        try {
            const id = req.params.id;
            const password = await Password.findByIdAndUpdate(id, req.body, {
                new: true
            });
            res.status(200).json({ password });

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Erro ao tentar atualizar" });
        }
    }

    static async deletePassword(req, res) {
        try {
            const id = req.params.id;
            const deleteRegister = await Password.findByIdAndDelete(id);
            if (deleteRegister) {
                res.status(200).json({ message: "Registro excluído com sucesso" });
            }

        } catch (error) {
            res.status(500).json({ message: "Erro ao tentar excluir a receita" });
        }
    }
}