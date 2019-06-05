const express = require('express');
const app = express();

//configuracion 
//tomamos como constante PORT para que tome el puerto 
//definido por el servidor  web o en su caso tome el 3000
app.set('port',process.env.PORT || 8080)


//middleware
app.use(express.json());//formato JSON al cliente

//rutas 
app.use(require('./rutas/clientes.js'));
// app.use(require('./rutas/empleados.js'));

//servidor
app.listen(app.get('port'),()=>{
	console.log('servidor en puerto',app.get('port'));

})