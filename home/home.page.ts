import { Layer } from './class/layer';
import { Component } from '@angular/core';
import { Cone } from './class/cone';
import { Cylinder } from './class/cylinder';
import { Figures } from './class/figures';
import { Square } from './class/square';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  figures:Figures[];

  constructor() {}

  getRandomInt(max){
    return Math.floor(Math.random()*Math.floor(max));
  }
  ras(nn:string){
    this.figures = new Array();
    let n = parseInt(nn)
    for (let i = 0; i<n;i++){
      this.figures.push(new Cylinder(this.getRandomInt(10),this.getRandomInt(15)))
      this.figures.push(new Cone(this.getRandomInt(20),this.getRandomInt(20)))
      this.figures.push(new Layer(this.getRandomInt(10)))
      this.figures.push(new Square(this.getRandomInt(10)))
    }
  }

}
