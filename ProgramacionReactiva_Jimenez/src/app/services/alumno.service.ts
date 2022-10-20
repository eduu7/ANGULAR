import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListaAlumnos } from '../data/alumnos';
import { alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  _la$: BehaviorSubject<alumno[]>;
  constructor() { 
    this._la$= new BehaviorSubject<alumno[]>(ListaAlumnos);
  }

  getAlumnos(){
    return this._la$;
  }
}
