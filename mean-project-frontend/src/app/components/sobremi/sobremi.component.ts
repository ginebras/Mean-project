import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  public title:string;
  public subtitle:string;
  public web:string;

  constructor() {
    this.title="SUPREMALEJO";
    this.subtitle="Nicolas tambien OHSI";
    this.web="aljofranco@gmail.com"
  }

  ngOnInit(): void {
  }

}
