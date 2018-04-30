-- Creamos La base de Datos
CREATE DATABASE crud_usuarios_node;

USE crud_usuarios_node;

CREATE TABLE users(

	-- Atributos de la Tabla
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name TEXT,
	last_name TEXT, 
	address TEXT,
	city TEXT,
	state TEXT,
	country TEXT,
	phone TEXT,
	area_code TEXT,
	birthdate TEXT,
	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DESCRIBE users;