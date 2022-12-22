const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect = () => {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@controledegastosnode.mmbh1oq.mongodb.net/?retryWrites=true&w=majority`);

    const connection = mongoose.connection;

    connection.on("error", () => {
        console.error("Erro ao tentar conectar com o mongodb");
    });

    connection.on("open", () => {
        console.log("Conectado ao mongoDB com sucesso");
    });
}

connect();
    
module.exports = mongoose;