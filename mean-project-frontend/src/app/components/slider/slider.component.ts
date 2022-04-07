import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura:number;
  @Output() conseguirAutor= new EventEmitter();
  public autor:any;

  constructor() {
    this.anchura=0;
    this.autor={
      nombre:"Alejo Franco",
      edad:17
    };
  }

  ngOnInit(): void {

    ($(".bxslider")as any).bxSlider({
      mode:"fade",
      captions:true,
      slideWidth: this.anchura
    });

    this.eventoLanzar(event);

  }

  eventoLanzar(event:any){
    this.conseguirAutor.emit(this.autor);
  }
}
