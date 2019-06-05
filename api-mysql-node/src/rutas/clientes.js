const express = require('express');
const rutas = express.Router();

const myqlConexion = require('../basededatos.js');

//Rutas de clientes
rutas.get('/clientes',(req,res)=> {
    myqlConexion.query('SELECT * FROM clientes',(err,filas,campos) => {
        // si la consula se ejecuto sin errores
        if(!err){
            // devolvemos la respuesta del cliente en formato JSON
            res.json(filas);
         }else{ //de otro modo devolvemos el error
            console.log(err);
        }
    });
});


module.exports = rutas;