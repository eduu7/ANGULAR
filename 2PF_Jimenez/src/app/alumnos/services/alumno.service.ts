import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { ListaAlumnos } from '../../data/alumnos';
import { alumno } from '../../models/alumno';

@Injectable()
export class AlumnoService {
  _la$: BehaviorSubject<alumno[]>;
  
  constructor() { 
    this._la$= new BehaviorSubject<alumno[]>(ListaAlumnos);
  }

  getAlumnos():Observable<alumno[]>{
    return this._la$.asObservable();
  }

  getAlumno(id: number):Observable<alumno|undefined>{

    var s= this.getAlumnos().pipe( map(x=>x.find(x=>x.id==id)));
     return s;

    // var d= ListaAlumnos.find(x=>x.id==id);
    // if(d!=null){
    //   return d;
    // }
    // else{
    //    var ds: alumno ={
    //     id:-1,
    //     name:'',
    //     last_name:'',
    //     gender:1,
    //     birth_date: new Date(1997, 2, 7),
    //     country:'',
    //     email:'',
    //     phone:''
    //    };

    //    return ds;
    // }
  }

  agregarAlumno(alumno: alumno){
    ListaAlumnos.push(alumno);
    this._la$.next(ListaAlumnos);
  }


  editarAlumno(alumno: alumno){
    let indice = ListaAlumnos.findIndex((c: alumno) => c.id === alumno.id);

    if(indice > -1){
     ListaAlumnos[indice] = alumno;
    }

    this._la$.next(ListaAlumnos);
  }

  eliminarAlumno(id: number){
    let indice = ListaAlumnos.findIndex((c: alumno) => c.id === id);

    if(indice > -1){
      ListaAlumnos.splice(indice, 1);
    }

    this._la$.next(ListaAlumnos);
  }

}
