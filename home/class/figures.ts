import { IShow } from './../interface/ishow';
import { IPlane } from './../interface/IPlane';

// загальний клас для всіх фігур(двохвимірних і трьохвимірних)
export abstract class Figures implements IPlane, IShow{
  R:number;
  constructor(R:number){
    this.R = R;
  }
  abstract plane();
  abstract show();
}