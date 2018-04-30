// Creando la Conexion a MySql

// Llamamos la Libreria de mysql
const mysql = require('mysql');

module.exports = () => {

	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database : 'crud_usuarios_node'	
	});

}