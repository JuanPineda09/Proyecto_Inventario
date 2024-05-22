CREATE TABLE IF NOT EXISTS dispositivos (
                    id_serial INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                    nom_dispositivo VARCHAR(255) NOT NULL,
                    fecha_registro DATE NOT NULL,
                    id_categoria INT NOT NULL  
                );