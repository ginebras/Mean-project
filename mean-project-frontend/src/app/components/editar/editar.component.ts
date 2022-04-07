import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { Global } from '../../services/global';
import { uploadService } from '../../services/upload.service';
import { Router,ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers:[ProjectService,uploadService]
})
export class EditarComponent implements OnInit {
  public project:Project;
  public title:string;
  public saveProject:Project;
  public status:string;
  public fileToUpload:Array<File>;
  public url:string;
  
  constructor(
    private _projectService:ProjectService,
    private _uploadService:uploadService,
    private _route:ActivatedRoute,
    private _router:Router
  ){
    this.status="";
    this.title="Editar Proyecto";
    this.project=new Project('','','',2021,'','','');
    this.fileToUpload=[];
    this.saveProject=new Project('','','',2021,'','','');
    this.url=Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params.id;

      this.getProject(id);
    });
  } 

  getProject(id:any){
    this._projectService.getProject(id).subscribe(
      response =>{
        console.log(response);
        this.project=response.project;
      }, 
      error =>{
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput:any){
    this.fileToUpload=<Array<File>>fileInput.target.files;
  }

  onSubmit(form:any){
    this._projectService.updateProject(this.project).subscribe(
      response =>{
        if(response){
          if(this.fileToUpload.length >= 1){
            this._uploadService.makeRequestFile(Global.url+"upload-image/"+response.project._id,[],this.fileToUpload,"image")
            .then((result)=>{
              this.status="bien";
              this.saveProject=response.project;
            });
          }
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

}
