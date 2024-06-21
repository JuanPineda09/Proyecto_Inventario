const pool = require('../config/db');

exports.getCategories = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM categoria_dispositivos');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
}

exports.getIdCategories = async (req, res) => {
    try {
        const {id} = req.params;
        const { rows } = await pool.query('SELECT * FROM categoria_dispositivos WHERE id_categoria = $1', [id]);
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
}

exports.postCategories = async (req, res) => {
    try {
        const data = req.body;
        const { rows } = await pool.query('INSERT INTO categoria_dispositivos (nom_categoria, descripcion) VALUES ($1, $2) RETURNING *',[data.nom_categoria, data.descripcion]);
        
        res.status(201)
        return res.json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
}

exports.deleteIdCategories = async (req, res) => {
    const {id} = req.params;
    const { rowCount } = await pool.query('DELETE FROM categoria_dispositivos WHERE id_categoria = $1 RETURNING *', [id]);
    if(rowCount == 0){
        res.status(404).json({ messages: "User not found"});
    }
    if(rowCount == -1){
        res.status(404).json({ messages: "User not found"});
    }
    return res.sendStatus(204);
}

exports.putIdCategories = async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await pool.query('UPDATE categoria_dispositivos SET nom_categoria = $1, descripcion = $2 WHERE id_categoria = $3',[data.nom_categoria, data.descripcion, id]);

        res.status(202)
        return res.send("User update "+ id);
    } catch (err) {
        console.error(err.message);
        res.status(500).send({msg : 'Error del servidor'});
        console.log(data);
    }
}