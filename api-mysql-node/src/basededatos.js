const mysql = require('mysql');

const myqlConexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company'
},'single');

myqlConexion.connect(function(err){
//    se crea la conexion con los parametros definidos arriba y 
//    si ocurre un error, se manda a la consola y se detiene con el
//    return
    if(err){
        console.log(err);
        return;
    }else{
        console.log('base de datos conectada correctamente');
    }
});

//se debe exportar para que otros archivos JavaScrip (js) 
// lo puedan usar
module.exports = myqlConexion;
