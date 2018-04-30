// Contiene toda la informacion del Servidor Express

// Hacemos el llamado de express
const express = require("express");

// Hacemos el llamado a path para trabajar con las rutas del servidor
const path = require('path');

// Hacemos el llamado a body parser para obtener los datos del navegador
const bodyParser = require("body-parser");


// Ejecutamos express
const app = express();


// Configuraciones del Sistema

// Retorna el MidleWare para servir archivos Estaticos: Imagenes,Js,Css
app.use(express.static( path.join(__dirname,'../public') ));

// Configuracion del Puerto
app.set('port',process.env.PORT || 3000);

// Definiendo el Motor de Plantillas, en este caso Tenemos Jade
app.set("view engine","jade");

// Definiendo la Ubicacion de los archivos de Vistas
app.set('views', path.join(__dirname,'../app/views'));


// Midlewares de Body Parser
// En caso de True al parametro de Extended es por que vamos a pasar algo mas que texto
app.use(bodyParser.urlencoded({extended:false}));


// Exportamos el Archivo para que lo use el App.js
module.exports = app;
