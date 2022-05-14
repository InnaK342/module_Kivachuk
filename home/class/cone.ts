import { IRadius } from './../interface/iradius';
import { Figure3d } from "./figure3d";

export class Cone extends Figure3d implements IRadius{
  h:number;
  R:number;
  l:number;
  constructor(h:number,R:number){
    super(R);
    this.h = h;
    this.l = Math.sqrt(this.h*this.h+this.R*this.R);
  }
  plane(){
    return Math.PI*this.R*this.l+Math.PI*Math.pow(this.R,2);
  };
  volume(){
    return (Math.PI*Math.pow(this.R,2)*this.h)/3;
  };
  radiusInside() {
    return this.R*Math.sqrt((this.l-this.R)/(this.l+this.R));
  }
  radiusOutside() {
    return (this.h*this.h+this.R*this.R)/(2*this.h);
  }
  show(){
    return "Конус h="+this.h+" R="+this.R+" l="+this.l.toFixed(2)+" має S="+this.plane().toFixed(2)+" V="+this.volume().toFixed(2)+". Радіус вписаної фігури "+this.radiusInside().toFixed(2)+", радіус описаної фігури "+this.radiusOutside().toFixed(2);
  }
}