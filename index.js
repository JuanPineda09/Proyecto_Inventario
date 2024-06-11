const express = require("express");
const cors = require("cors");
const userRoutes = require("./routers/usersRoutes")


const app = express();

app.use(cors());
app.use(express.json())

app.use(userRoutes);

app.listen(4000, () =>{
    console.log("Servidor corriendo en el puerto 4000");
});