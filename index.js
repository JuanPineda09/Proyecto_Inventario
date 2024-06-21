const express = require("express");
const cors = require("cors");
const userRoutes = require("./routers/usersRoutes");
const categoriesRoutes = require("./routers/categoriesRoutes");

require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json())

app.use(userRoutes, categoriesRoutes);

app.listen(process.env.SERVPORT, () =>{
    console.log("El servidor esta corriendo");
});