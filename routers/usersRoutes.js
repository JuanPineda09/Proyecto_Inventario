const {Router} = require('express');
const usersControllers = require('../controllers/usersControllers')

const router = Router();

router.get("/users", usersControllers.getUsers);

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

router.post("/users", async (req, res) => {
    try {
        const data = req.body;
        const { rows } = await pool.query('INSERT INTO usuarios (nom_empleado, email) VALUES ($1, $2) RETURNING *',[data.nom_empleado, data.email]);

        res.status(201)
        return res.json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
});

router.delete("/users/:id", async (req, res) => {
    const {id} = req.params;
    const { rowCount } = await pool.query('DELETE FROM usuarios WHERE id_empleado = $1 RETURNING *', [id]);
    if(rowCount == 0){
        res.status(404).json({ messages: "User not found"});
    }
    return res.sendStatus(204);
});

router.put("/users/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await pool.query('UPDATE usuarios SET nom_empleado = $1, email = $2 WHERE id_empleado = $3',[data.nom_empleado, data.email, id]);

        res.status(202)
        return res.send("User update "+ id);
    } catch (err) {
        console.error(err.message);
        res.status(500).send({msg : 'Error del servidor'});
        console.log(data);
    }
});

module.exports = router;