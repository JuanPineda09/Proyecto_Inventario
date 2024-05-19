const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");

conectarDB();

const app = express();

app.use(cors());

app.use(express.json({extended: true}));

app.listen(4000, () =>{
    console.log("Servidor corriendo en el puerto 4000");
});