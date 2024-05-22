const {Pool} = require("postgres-pool");

const conectarDB = async () => {
    try {
        const pool =  new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'inventario',
            password: 'G4t0*T0x1c0*24',
            port: 5432
        })
        await pool.query('SELECT NOW()');
        console.log('Database Connection Success');
        console.log(pool)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB;