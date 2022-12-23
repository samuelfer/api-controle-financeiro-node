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

    static async listRevenue(req, res) {
        Revenue.find({}).then(list => {
            const { month } = req.headers;
            const showMonth = month ? month : "";
            const { user } = req.headers;

            const newArrayList = list.map(el => {
                return {
                    user: {
                        title: el.user.title,
                        month: {
                            title: el.user.month.title,
                            listMonth: {
                                _id: el.id.toString(),
                                typeRevenue: el.user.month.listMonth.typeRevenue,
                                value: el.user.month.listMonth.value,
                                dateEntry: el.user.month.listMonth.dateEntry,
                                actions: [
                                    "https://raw.githubusercontent.com/daniloagostinho/curso-angular15-na-pratica/main/src/assets/images/edit.png",
                                    "https://raw.githubusercontent.com/daniloagostinho/curso-angular15-na-pratica/main/src/assets/images/delete.png"
                                ]
                            }
                        }
                    }
                }
            });

            const result = showMonth ? newArrayList.filter(item =>
                user.includes(item.user.title) && item.user.month.title.includes(month)) : list
            res.status(200).json({ result });
        });
    }

    static async updateRevenue(req, res) {
        try {
            const id = req.params.id;
            const user = await Revenue.findByIdAndUpdate(id, req.body, {
                new: true
            });
            res.status(200).json({ user });

        } catch (error) {
            res.status(500).json({ message: "Erro ao tentar atualizar a receita" });
        }
    }

    static async deleteRevenue(req, res) {
        try {
            const id = req.params.id;
            const deleteRevenue = await Revenue.findByIdAndDelete(id);
            if (deleteRevenue) {
                res.status(200).json({ message: "Receita excluída com sucesso" });
            }

        } catch (error) {
            res.status(500).json({ message: "Erro ao tentar excluir a receita" });
        }
    }
}