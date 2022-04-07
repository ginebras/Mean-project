var mongoose=require('mongoose');
var app=require('./app');
var port=3700;

mongoose.Promise=global.Promise;
mongoose.set('useFindAndModify',false);

//CONEXION A LA BASE DE DATOS
mongoose.connect('mongodb://localhost:27017/portafolio',{useNewUrlParser:true, useUnifiedTopology:true})
	.then(() =>{
		console.log("Conexion a la base de datos establecida con exito");
		
		//CREACION DEL SERVIDOR
		app.listen(port,()=>{
			console.log("Conexion al servidor localhost:27017 establecida");
		});

	})
	.catch(err => console.log(err));