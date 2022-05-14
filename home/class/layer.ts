import { Figure3d } from "./figure3d";

export class Layer extends Figure3d{
  R:number;
  constructor(R:number){
    super(R);
  }
  plane(){
    return 4*Math.PI*Math.pow(this.R,2);
  };
  volume(){
    return (4/3)*Math.PI*Math.pow(this.R,3);
  };
  show(){
    return "Шар R="+this.R+" має S="+this.plane().toFixed(2)+" V="+this.volume().toFixed(2);
  }
}