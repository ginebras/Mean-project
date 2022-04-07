'use strict'

var express=require('express');
var ProjectController=require('../controllers/proyect');

var router=express.Router();

//MIDLEWARES
var multipart=require('connect-multiparty');
var multipartMiddleware=multipart({uploadDir:"./uploads"});

//RUTAS
router.get("/home",ProjectController.home);
router.post("/pruebas",ProjectController.prueba);
router.post("/save-proyect",ProjectController.saveProyect);
router.get("/get-proyecto/:id?",ProjectController.getProject);
router.get("/proshectos",ProjectController.getProjects);
router.put("/proshectoUpdated/:id",ProjectController.updateProject)
router.delete("/delete/:id",ProjectController.deleteProject);
router.post("/upload-image/:id",multipartMiddleware,ProjectController.uploadImage);
router.get("/getImage/:image",ProjectController.getImage);

module.exports=router;