//  Hacemos llamado al Archivo de Conexion de la Bd
const dbConnect = require('../../config/dbConnect');

// Definimos Todas las Rutas de la app

module.exports = app => {

	// Contiene la Conexion a la BD
	const connection = dbConnect();


	// Ruta que Redirecciona a la vista de crear Usuario
	// Ya sea la Ruta simple  / o la del modulo user
	app.get(['/','/user'], (req,res) => {
		
		res.redirect('/user/create');
		
	});

	// Ruta que Retorna Vista Crear Usuario
	app.get('/user/create', (req,res) => {
		
		// Enviando el codigo de status
		if (res == null || res == 'undefined') {
			res.status(500).send({ error: "Verificar la Conexion de la base de datos :(" });
		}

		res.render('user/create_user');
		
	});

	// Ruta que Registra el Usuario
	app.post('/user/store', (req,res) => {

		// Obteniendo los datos del Formulario usando Body Parser
		const{name, last_name, address, city, state, country, phone, area_code,birthdate} = req.body;

		// Ejecuatamos el Query de Insert
		connection.query('INSERT INTO users SET?', {
			name,
			last_name,
			address,
			city,
			state,
			country,
			phone,
			area_code,
			birthdate
		},(error,resultado) => {

			// Enviando el codigo de status
			if (resultado == null || resultado == 'undefined') {
			    res.status(500).send({ error: "Verificar la Conexion de la base de datos :(" });
			}

			res.redirect('/user/read');
		})
		
	});

	// Ruta De Consultar Usuario
	app.get('/user/read', (req,res) => {

		// Consulta que me trae todos los Usuarios y los guarda en un json 
		const consulta = "SELECT * FROM users";

		// Ejecutamos la Consulta
		connection.query(consulta , (error, result)  => {

			// Mostrando por Consola los Datos la consulta por consola
			//console.log(result)

			// Enviando el codigo de status
			if (result == null || result == 'undefined') {
			    res.status(500).send({ error: "Verificar la Conexion de la base de datos :(" });
			}
			
			res.render('user/read_user',{

				// Enviando Datos a la Vista
				users : result
			});
		})
		
	});

	// Ruta que Retorna Vista Mostrar Usuario
	// Parametros De Entrada:
	// Id: Hace referncia al Id del Usuario el cual sera consultado por medio de este
	app.get('/user/show/:id', (req,res) => {

		// Obtenemos de la respuesta el Id
		//console.log('Request Id:', req.params.id);

		// Consulta que me trae el Usuario dado su ID y lo guarda en un json 
		const consulta = "SELECT * FROM users WHERE id = " + req.params.id;

		// Ejecutamos la Consulta
		connection.query(consulta , (error, result)  => {

			// Obtenemos de la respuesta de la consulta
			//console.log(result);

			// Enviando el codigo de status
			if (result == null || result == 'undefined') {
				res.status(500).send({ error: "Verificar la Conexion de la base de datos :(" });
			}

			res.render('user/show_user',{

				// Enviando Datos a la Vista
				data : result
			});

		})
		
	});


	// Ruta que Retorna Vista Editar Usuario
	// Parametros De Entrada:
	// Id: Hace referncia al Id del Usuario el cual sera consultado por medio de este
	app.get('/user/edit/:id', (req,res) => {

		// Obtenemos de la respuesta el Id
		//console.log('Request Id:', req.params.id);

		// Consulta que me trae el Usuario dado su ID y lo guarda en un json 
		const consulta = "SELECT * FROM users WHERE id = " + req.params.id;

		// Ejecutamos la Consulta
		connection.query(consulta , (error, result)  => {

			// Obtenemos de la respuesta de la consulta
			//console.log(result);

			// Enviando el codigo de status
			if (result == null || result == 'undefined') {
				res.status(500).send({ error: "Verificar la Conexion de la base de datos :(" });
			}
			
			res.render('user/edit_user',{

				// Enviando Datos a la Vista
				data : result
			});

		})
		
	});

	// Ruta que Retorna Vista de Consultar Usuario luego de haber Actualizado
	// Parametros De Entrada:
	// Id: Hace referncia al Id del Usuario el cual sera actualizado
	app.post('/user/update', (req,res) => {

		// Obteniendo los datos del Formulario usando Body Parser
		const{id,name, last_name, address, city, state, country, phone, area_code,birthdate} = req.body;

		// Prueba de Mensaje
		//console.log('Request Id:', id);

		// Consulta que actualiza el Usuario segun su ID

		// Ejecutamos la Consulta
		connection.query("UPDATE users SET ? WHERE ?",[{ name, last_name, address, city, state, country, phone, area_code,birthdate },{ id }] , (error, result)  => {

			// Volviendo a la Vista de Consultar Usuarios
			res.redirect('/user/read');

		})
		
	});


	// Ruta que Retorna Vista Consultar Usuario Despues de Haberlo Borrado
	// Parametros De Entrada:
	// Id: Hace referncia al Id del Usuario el cual sera eliminado
	app.get('/user/delete/:id', (req,res) => {

		// Obtenemos de la respuesta el Id
		//console.log('Request Id:', req.params.id);

		// Consulta que Elimina el  Usuario dado su ID
		const consulta = "DELETE FROM users WHERE id = " + req.params.id;

		// Ejecutamos la Consulta
		connection.query(consulta , (error, result)  => {

			// Obtenemos de la respuesta de la consulta
			//console.log(result);

			// Volviendo a la Vista de Consultar Usuarios
			res.redirect('/user/read');

		})
		
	});




}
