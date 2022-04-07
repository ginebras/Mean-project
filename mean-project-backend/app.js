//EXPRESS Y PETICIONES 
//SERVIDOR
'use strict'

var express=require('express');
var bodyParser=require('body-parser');
var app=express();

//MIDLEWARES
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CARGAR ARCHIVOS RUTAS
var project_rutas=require("./routes/proyect");

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//RUTAS
app.use('/api',project_rutas);

//EXPORTS
module.exports=app;