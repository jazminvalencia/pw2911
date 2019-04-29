const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection')
const app = express();
//importar rutas
const indiceRutas = require('./rutas/index');

//configuraciones
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//Usamos rutas
app.use("/",indiceRutas);

//Middleware
app.use(morgan('dev')); //dev = desarrollo
app.use(myConnection(mysql,{
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3606,
	database: 'crudnodejsmysql'
},'single'));

//Activar el servidor de escucha
app.listen(app.get('port'),() => {
	console.log("Escuchando en puerto 3000");
})