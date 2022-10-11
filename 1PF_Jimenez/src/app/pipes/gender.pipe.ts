import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value==1){
      return 'Hombre';
    }
    else{
      return 'mujer';
    }
  }

}
