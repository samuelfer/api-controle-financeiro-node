const User = require("../models/User");

const bcrypt = require("bcrypt");
module.exports = class AuthRegisterUserController {
    static async init(req, res) {
        res.send({ message: "Bem vindo" });
    }

    static async registerUser(req, res) {
        const {
            name,
            email,
            age,
            password,
            confirmPassword
        } = req.body;

        let image = "";

        if (req.file) {
            image = req.file.filename;
        }

        if (!name) {
            return res.status(422).json({ message: "O nome é obrigatório" });
        }

        if (!email) {
            return res.status(422).json({ message: "O email é obrigatório" });
        }

        if (!password) {
            return res.status(422).json({ message: "A senha é obrigatória" });
        }

        if (password != confirmPassword) {
            return res.status(422).json({ message: "A senha e a confirmação de senha não são iguais" });
        }

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ message: "Já existe uma conta com esse email" });
        }

        const hash = await bcrypt.genSalt(12);

        const hashPassword = await bcrypt.hash(password, hash);

        const user = new User({
            name,
            email,
            age,
            image,
            password: hashPassword
        });

        try {
            await user.save();
            res.status(201).json({ message: "Usuário cadastrado com sucesso", user });
        } catch (error) {
            res.status(500).json({ message: "Ocorreu um erro ao tentar cadastrar o usuário" });
        }
    }
}