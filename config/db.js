const { Client } = require('pg')

const conectarDB = async () => {
    try{
        const connection = {
                user: 'postgres',
                host: 'localhost',
                database: 'inventario',
                password: 'G4t0*T0x1c0.24',
                port: 5432,
            } 
        }catch(error){
            console.log(`error : ${error.message}`);
            process.exit(1);
    }
}
module.exports = conectarDB;