const express = require("express");
const cors = require("cors");
const userRoutes = require("./routers/usersRoutes")
require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json())

app.use(userRoutes);

app.listen(process.env.SERVPORT, () =>{
    console.log("El servidor esta corriendo");
});