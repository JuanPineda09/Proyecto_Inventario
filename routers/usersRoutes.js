const {Router} = require('express');
const pool = require('../config/db')

const router = Router();

router.get("/users", async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM usuarios');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
});

router.get("/users/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const { rows } = await pool.query('SELECT * FROM usuarios WHERE id_empleado = $1', [id]);
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
});

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