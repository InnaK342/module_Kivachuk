import { IRadius } from './../interface/iradius';
import { Figure2d } from './figure2d';

export class Square extends Figure2d implements IRadius{
  R:number; //сторона квадрата
  constructor(R:number){
    super(R);
  }
  plane(){
    return Math.pow(this.R,2);
  };
  perimeter() {
    return 4*this.R;
  }
  radiusInside() {
    return this.R/2;  
  }
  radiusOutside() {
    return (this.R*Math.sqrt(2))/2;
  }
  show() {
    return "Квадрат a="+this.R+" має S="+this.plane()+" P="+this.perimeter().toFixed(2)+". Радіус вписаної фігури "+this.radiusInside().toFixed(2)+", радіус описаної фігури "+this.radiusOutside().toFixed(2);
  }
}