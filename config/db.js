import sql = from "pg";
//Instalar Pool = postgres-pool

const {Pool} = sql;

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'inventario',
    password: 'G4t0*T0x1c0.24',
    port: 5432
})
try {
    await pool.query('SELECT * NOW()')
    console.log('Database Connection Success')
} catch (error) {
    console.log(error)
}