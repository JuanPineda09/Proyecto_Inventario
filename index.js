const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");
const userRoutes = require("./routers/usersRoutes")


const app = express();

app.use(cors());

app.use(userRoutes);

app.listen(4000, () =>{
    console.log("Servidor corriendo en el puerto 4000");
});