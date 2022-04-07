import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { Global } from '../../services/global';
import { uploadService } from '../../services/upload.service';

@Component({
  selector: 'app-crear-proyectos',
  templateUrl: './crearProyectos.component.html',
  styleUrls: ['./crearProyectos.component.css'],
  providers:[ProjectService, uploadService]
})
export class CrearProyectosComponent {
  public project:Project;
  public title:string;
  public saveProject:Project;
  public status:string;
  public fileToUpload:Array<File>;
  
  constructor(
    private _projectService:ProjectService,
    private _uploadService:uploadService
  ){
    this.status="";
    this.title="Crear Proyecto";
    this.project=new Project('','','',2021,'','','');
    this.fileToUpload=[];
    this.saveProject=new Project('','','',2021,'','','');
  }

  //GUARDAR LOS DATOS BASICOS
  onSubmit(form:any){
    console.log(this.project)
    this._projectService.saveProject(this.project).subscribe(
      response =>{
        if(response){

          //SUBIR LA IMAGEN
          this._uploadService.makeRequestFile(Global.url+"upload-image/"+response.project._id,[],this.fileToUpload,"image")
          .then((result) =>{
            this.status="bien";
            this.saveProject=response.project;
            form.reset();
          });
        }
        else{
          this.status="fail";
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput:any){
    this.fileToUpload=<Array<File>>fileInput.target.files;
  }

}
