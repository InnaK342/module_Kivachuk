import { IRadius } from './../interface/iradius';
import { Figure3d } from "./figure3d";

export class Cylinder extends Figure3d implements IRadius{
  h:number; 
  R:number;
  constructor(h:number,R:number){
    super(R);
    this.h = h;
  }
  plane(){
    return 2*Math.PI*Math.pow(this.R,2)+2*Math.PI*this.R*this.h;
  };
  volume(){
    return Math.PI*Math.pow(this.R,2)*this.h;
  };
  radiusInside() {
    if (this.R*2 ==this.h){
      return this.R;
    }
    else return -1;  
  }
  radiusOutside() {
    let diagonal = Math.sqrt(this.h*this.h+(this.R+this.R)*(this.R+this.R));
    return diagonal/2;
  }
  show(){
    let str: string;
    if (this.radiusInside()==-1){
      str = " Радіус вписаної фігури неможливо знайти"
    }
    else{
      str = " Радіус вписаної фігури "+this.radiusInside().toFixed(2);
    }
    return "Циліндр h="+this.h+" R="+this.R+" має S="+this.plane().toFixed(2)+" V="+this.volume().toFixed(2)+"."+str+", радіус описаної фігури "+this.radiusOutside().toFixed(2);
  }
}