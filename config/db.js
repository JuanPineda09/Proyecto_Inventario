const pg = require("pg");   

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'inventario',
    password: 'G4t0*T0x1c0*24',
    port: 5432
})
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
        release();
        if (err) {
            return console.error('Error executing query', err.stack);
        }
    });
});

module.exports = pool;