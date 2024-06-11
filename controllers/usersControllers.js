const pool = require('../config/db')

exports.getUsers = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM usuarios');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
}