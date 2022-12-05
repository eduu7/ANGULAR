import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListaAlumnos } from '../../data/alumnos';
import { alumno } from '../../models/alumno';

@Injectable()
export class AlumnoService {
  
  constructor( private http: HttpClient) { 
    
   
  }

  getAlumnos():Observable<alumno[]>{
    return this.http.get<alumno[]>(`${environment.api}/alumno`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  getAlumno(id: number):Observable<alumno>{

    return this.http.get<alumno>(`${environment.api}/alumno/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
    
  }

  agregarAlumno(alumno: alumno){
    this.http.post(`${environment.api}/alumno/`, alumno, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(
      // console.log
      );
  }


  editarAlumno(alumno: alumno){
    this.http.put<alumno>(`${environment.api}/alumno/${alumno.id}`, alumno).pipe(
      catchError(this.manejarError)
    ).subscribe(
      // console.log
      );
    // this._la$.next(ListaAlumnos);
  }

  eliminarAlumno(id: number){
    this.http.delete<alumno>(`${environment.api}/alumno/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(
      // console.log
      );
    alert("Registro eliminado"); 
    // this._la$.next(ListaAlumnos);
  }


  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
}
