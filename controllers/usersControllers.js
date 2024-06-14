const { Console } = require('console');
const pool = require('../config/db');
const bcrypt = require('bcrypt');

exports.getUsers = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM usuarios');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
}

exports.getIdUsers = async (req, res) => {
    try {
        const {id} = req.params;
        const { rows } = await pool.query('SELECT * FROM usuarios WHERE id_empleado = $1', [id]);
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
}

exports.postUsers = async (req, res) => {
    try {
        const data = req.body;
        const {credenciales} = req.body;
        const salt = bcrypt.genSaltSync(10)
        const crypt = await bcrypt.hash(credenciales, salt);
        const { rows } = await pool.query('INSERT INTO usuarios (nom_empleado, email, credenciales) VALUES ($1, $2, $3) RETURNING *',[data.nom_empleado, data.email, crypt]);
        

        
        res.status(201)
        return res.json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
}

exports.deleteIdUsers = async (req, res) => {
    const {id} = req.params;
    const { rowCount } = await pool.query('DELETE FROM usuarios WHERE id_empleado = $1 RETURNING *', [id]);
    if(rowCount == 0){
        res.status(404).json({ messages: "User not found"});
    }
    return res.sendStatus(204);
}

exports.putIdUsers = async (req, res) => {
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
}