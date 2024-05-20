const conectarDB = require("./config/db");

conectarDB.connect()
conectarDB.query(`CREATE TABLE IF NOT EXISTS dispositivos (
                    brand VARCHAR(255),
                    model VARCHAR(255),
                    year INT
                );`)