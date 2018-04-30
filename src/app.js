// Hacemos la instancia del servidor
const app = require('./config/server');

// Hacemos el llamado a las Rutas
const routes = require('./app/routes/users')(app);


// Ejecutamos el Servidor
app.listen(app.get('port'),() => {
	console.log('Servidor Funcionando En el Puerto: ' , app.get('port') );
})