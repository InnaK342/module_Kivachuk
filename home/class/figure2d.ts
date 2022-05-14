import { IPerimeter } from './../interface/perimeter';
import { Figures } from './figures';

// загальний клас для двовимірних фігур
export abstract class Figure2d extends Figures implements IPerimeter{
  R:number;
  constructor(R:number){
    super(R);
  }
  abstract perimeter();
}