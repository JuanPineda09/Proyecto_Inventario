const express = require("express");
const router = express.Router();
const dispositivoController = require("../controllers/dispositivoControllers")


router.get( "/", dispositivoController.verDispositivos);

module.exports = router;









/*router.get("/", (req, res) => {
    res.json({msg: "Desde router GET"})
})

router.post("/", (req, res) => {
    res.json({msg: "Desde router POST es crear"})
})

router.put("/", (req, res) => {
    res.json({msg: "Desde router PUT es actualizar"})
})

router.delete("/", (req, res) => {
    res.json({msg: "Desde router Delete es borrar"})
})*/