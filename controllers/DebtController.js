const Debt = require("../models/Debt");

module.exports = class DebtController {
    static async registerDebt(req, res) {
        const title = req.body.user.month.title;
        const user = req.body.user.title;
        const date = req.body.user.date;

        const { debt, category, value, expirationDate } = req.body.user.month.listMonth;

        if (!debt) {
            return res.status(422).json({ message: "A dívida é obrigatória" });
        }

        if (!category) {
            return res.status(422).json({ message: "A categoria é obrigatória" });
        }

        if (!value) {
            return res.status(422).json({ message: "O valor é obrigatório" });
        }

        if (!expirationDate) {
            return res.status(422).json({ message: "A data de expiração é obrigatória" });
        }

        const debtSave = new Debt({
            user: {
                title: user,
                date,
                month: {
                    title,
                    listMonth: {
                        debt,
                        category,
                        value,
                        expirationDate
                    }
                }
            }
        });

        try {
            await debtSave.save();
            res.status(201).json({ message: "Cadastro realizado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Ocorreu um erro ao tentar cadastrar" });
        }
    }
}