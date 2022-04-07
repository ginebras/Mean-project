'use strict'

var Proyect=require('../models/proyect');
var fs=require('fs');
var path=require('path');

var controller={
	home:function(req,res){
		return res.status(200).send({
			message:"Home ejecutada"
		})
	},

	prueba:function(req,res){
		return res.status(200).send({
			message:"Prueba lanzada"
		})
	},

	//GUARDAR PROYECTO EN MONGODB
	saveProyect:function(req,res){
		var proyect=new Proyect();

		var params=req.body;
		proyect.name=params.name;
		proyect.autor=params.autor;
		proyect.year=params.year;
		proyect.langs=params.langs;
		proyect.category=params.category;
		proyect.image=null;

		proyect.save((err,proyectStored)=>{
			if (err) return res.status(500).send({message:"Error al guardar un objeto en la base de datos"});
			if (!proyectStored) return res.status(404).send({message:"No se ha guardado el documento en la base de datos"});
			return res.status(200).send({message:"Todo bien compa",proyect:proyectStored});
		});
	},

	//RECUPERAR PROYECTO DE MONGODB
	getProject:function(req,res){
		var projectId=req.params.id;

		if (projectId==null) return res.status(200).send({message:"No hay ide asi que..."});

		Proyect.findById(projectId,(err,project)=>{
			if (err) return res.status(500).send({message:"Error capo"});
			if (!project) return res.status(404).send({message:"Projecto muerto)?"});

			return res.status(200).send({
				project
			});
		});
 	},

 	//RECUPERAR TODOS LOS PROYECTOS
 	getProjects:function(req,res){
 		Proyect.find({}).sort('year').exec((err,projects)=>{
 			
 			if (err) return res.status(500).send({message:"ERROR AL DEVOLVER LOS DATOS DIO MIO"});

 			if (!projects) return res.status(404).send({message:"DIO MIO NO HAY PROSHECTOS"});

 			return res.status(200).send({projects});
 		});
 	},

 	//ACTUALIZAR DATOS DE UN PROYECTO EN LA BASE DE DATOS
 	updateProject:function(req,res){
 		var projectId=req.params.id;
 		var update=req.body;

 		Proyect.findByIdAndUpdate(projectId,update,{new:true},(err,projectUpdated)=>{
 			if (err) return res.status(500).send({message:"Ha ocudido un edod"});
 			if (!projectUpdated) return res.status(404).send({message:"NO SE PUDO ACTUALIZAR JAJAJA"});
 			return res.status(200).send({project:projectUpdated});
 		});
 	},

 	//BORRAR PROYECTO OH SI UHUHHU
 	deleteProject:function(req,res){
 		var projectId=req.params.id;

 		Proyect.findByIdAndDelete(projectId,(err,projectRemoved)=>{
 			if (err) return res.status(500).send({message:"NO"});
 			if (!projectRemoved) return res.status(404).send({message:"No eCSISTE EL TOYECPRO"});

 			return res.status(200).send({message:"Bien :,v"});
 		});
 	},

 	//SUBIR IMAGENES
 	uploadImage:function(req,res){
 		var projectId=req.params.id;
 		var fileName="Imagen no subida...";

 		if (req.files){
 			var filePath=req.files.image.path;
 			var fileSplit=filePath.split("\\");
 			var fileName=fileSplit[1];


 			var extSplit=fileName.split("\.");
 			var fileExt=extSplit[1];

 			if(fileExt=="jpg" || fileExt=="png" || fileExt=="jpeg" || fileExt=="gif"){
 				Proyect.findByIdAndUpdate(projectId,{image:fileName},{new:true},(err,projectUpdated)=>{
	 				if (err) return res.status(500).send({message:"No se pudo subir la imagen"});

	 				if (!projectUpdated) return res.status(404).send({message:"El proyecto no se pudo updatear"});

	 				return res.status(200).send({message:"Piola",file:projectUpdated});
	 			});
 			}
 			else{
 				fs.unlink(filePath,(err)=>{
 					return res.status(200).send({message:"extension no valida xd"});
 				});
 			}
 		} 
 		else {
 			return res.status(200).send({message:fileName})
 		}			
 	},

 	getImage:function(req,res){
 		var file=req.params.image;
 		var path_file="./uploads/"+file;

 		fs.exists(path_file,(exists)=>{
 			if(exists){
 				return res.sendFile(path.resolve(path_file));
 			}
 			else{
 				res.status(200).send({message:"No existe la imagen"});
 			}
 		});
 	}
};

module.exports=controller;