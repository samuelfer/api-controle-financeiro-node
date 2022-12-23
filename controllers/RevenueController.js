const Revenue = require("../models/Revenue");

module.exports = class RevenueController {
    static async registerRevenue(req, res) {
        const {
            typeRevenue,
            value,
            dateEntry
        } = req.body.user.month.listMonth;

        const title = req.body.user.month.title;
        const user = req.body.user.title;

        if (!typeRevenue) {
            return res.status(422).json({ message: "O tipo de receita é obrigatório" });
        }

        if (!value) {
            return res.status(422).json({ message: "O valor é obrigatório" });
        }

        if (!dateEntry) {
            return res.status(422).json({ message: "A data de entrada é obrigatória" });
        }

        const revenue = new Revenue({
            user: {
                title: user,
                month: {
                    title,
                    listMonth: {
                        typeRevenue,
                        value,
                        dateEntry
                    }
                }
            }
        });

        try {
            await revenue.save();
            res.status(201).json({ message: "Cadastro realizado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Ocorreu um erro ao tentar cadastrar" });
        }
    }
}