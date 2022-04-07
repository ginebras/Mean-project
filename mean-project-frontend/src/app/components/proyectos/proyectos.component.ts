import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Global } from '../../services/global';
import { Project } from '../../models/project';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  providers:[ProjectService]
})
export class ProyectosComponent implements OnInit {
  public url:string;
  public projects:Project[];

  constructor(
    private _projectService:ProjectService
  ){
    this.url=Global.url;
    this.projects=[];
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response =>{
        if(response){
          this.projects=response.projects;
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
