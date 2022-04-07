import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public anchuraToSlider:any;
  public sliderWidth:number;
  public autor:any;
  @ViewChild('texto',{static:true}) texto;

  constructor(){
    this.anchuraToSlider=0;
    this.sliderWidth=0;
    this.autor={};
  }

  ngOnInit():void{
    
    $("#logo").click(function(){
      $("header").css("background","purple");
    });
  }

  ngAfterViewInit(){
    console.log(this.texto.nativeElement.innerText);
  }

  cargarSlider(){
    this.anchuraToSlider=this.sliderWidth;
  }
  resetearSlider(){
    this.anchuraToSlider=null;
  }

  getAutor(event:any){
    this.autor=event;
  }
}
