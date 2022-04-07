import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';  

@Injectable()
export class ProjectService{
	public url:string;

	constructor(
		private _http:HttpClient
	){
		this.url=Global.url;
	}

	returnService(){
		return "Todo bien desde Angular";
	}

	saveProject(project:Project):Observable<any>{
		let params=JSON.stringify(project);
		let headers=new HttpHeaders().set("content-type","application/json");

		return this._http.post(this.url+"save-proyect",params,{headers:headers});
	}

	getProjects():Observable<any>{
		let headers=new HttpHeaders().set('content-type','application/json');

		return this._http.get(this.url+"proshectos",{headers:headers});
	}


	getProject(id:any):Observable<any>{
		let headers=new HttpHeaders().set('content-type','application/json');

		return this._http.get(this.url+"get-proyecto/"+id,{headers:headers});
	}

	deleteProject(id:any):Observable<any>{
		let headers=new HttpHeaders().set('content-type','application/json');

		return this._http.delete(this.url+"delete/"+id,{headers:headers});
	}

	updateProject(project:any):Observable<any>{
		let params=JSON.stringify(project);
		let headers=new HttpHeaders().set('content-type','application/json');
	
		return this._http.put(this.url+"proshectoUpdated/"+project._id,params,{headers:headers});
	}
}