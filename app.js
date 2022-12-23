const express = require("express");
const cors = require("cors");

const AuthRegisterUserRoutes = require("./routes/AuthRegisterUserRoutes");
const LoginRoutes = require("./routes/LoginRoutes");
const RevenueRoutes = require("./routes/RevenueRoutes");

require("dotenv").config();

var app = express();
app.use(express.json());

app.use(cors());

app.use(AuthRegisterUserRoutes);
app.use(LoginRoutes);
app.use(RevenueRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});

require("./database/connection");