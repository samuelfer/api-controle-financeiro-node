const express = require("express");
const cors = require("cors");

const AuthRegisterUserRoutes = require("./routes/AuthRegisterUserRoutes");
const LoginRoutes = require("./routes/LoginRoutes");
const RevenueRoutes = require("./routes/RevenueRoutes");
const PasswordRoutes = require("./routes/PasswordRoutes");
const DebtRoutes = require("./routes/DebtRoutes");

require("dotenv").config();

var app = express();
app.use(express.json());

app.use(cors());

app.use(AuthRegisterUserRoutes);
app.use(LoginRoutes);
app.use(RevenueRoutes);
app.use(PasswordRoutes);
app.use(DebtRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});

require("./database/connection");