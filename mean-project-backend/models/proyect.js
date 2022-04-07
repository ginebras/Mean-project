'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ProyectSchema=Schema({
	name:String,
	autor:String,
	year:Number,
	langs:String,
	category:String,
	image:String
});

module.exports=mongoose.model('proyectEnviado',ProyectSchema);