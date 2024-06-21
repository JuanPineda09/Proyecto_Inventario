CREATE TABLE IF NOT EXISTS usuarios (
                    id_empleado SERIAL PRIMARY KEY NOT NULL,
                    nom_empleado VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL,
                    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    credenciales VARCHAR(500) NOT NULL
                );

CREATE TABLE IF NOT EXISTS categoria_dispositivos (
                    id_categoria SERIAL PRIMARY KEY NOT NULL,
                    nom_categoria VARCHAR(255) NOT NULL,
                    descripcion VARCHAR(255) NOT NULL
                );

CREATE TABLE IF NOT EXISTS dispositivos (
                    id_serial SERIAL PRIMARY KEY NOT NULL,
                    nom_dispositivo VARCHAR(255) NOT NULL,
                    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    fk_id_categoria SERIAL NOT NULL,
                    fk_id_empleado_asignado SERIAL NOT NULL
                );

ALTER TABLE dispositivos
ADD CONSTRAINT FK_empleado_asignado FOREIGN KEY (fk_id_empleado_asignado)
REFERENCES usuarios(id_empleado);

ALTER TABLE dispositivos
ADD CONSTRAINT FK_categoria FOREIGN KEY (fk_id_categoria)
REFERENCES categoria_dispositivos(id_categoria);