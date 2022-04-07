import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { Global } from '../../services/global';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
  providers:[ProjectService]
})
export class DetallesComponent implements OnInit {
  public url:string;
  public project:Project;

  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _projectService:ProjectService
  ){
    this.url=Global.url;
    this.project=new Project('','','',2021,'','','');
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

  deleteProject(id:any){
    this._projectService.deleteProject(id).subscribe(
      response=>{
        if(response){
          this._router.navigate(['/proyectos']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
