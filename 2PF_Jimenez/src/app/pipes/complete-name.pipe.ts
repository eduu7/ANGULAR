import { Pipe, PipeTransform } from '@angular/core';
import { alumno } from '../models/alumno';

@Pipe({
  name: 'completeName',
  pure:false
})
export class CompleteNamePipe implements PipeTransform {

  transform(value: alumno, ...args: unknown[]): unknown {
    return value.name +" "+ value.last_name;
  }

}
