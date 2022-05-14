import { IVolume } from './../interface/ivolume';
import { Figures } from './figures';

// загальний клас для трьохвимірних фігур
export abstract class Figure3d extends Figures implements IVolume{
  R:number;
  constructor(R:number){
    super(R);
  }
  abstract volume();
}