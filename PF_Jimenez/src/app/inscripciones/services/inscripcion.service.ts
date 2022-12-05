import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, filter, map, Observable, Subject, throwError } from 'rxjs';
import { Inscripcion } from 'src/app/models/inscripcion';
import { environment } from 'src/environments/environment';
 

@Injectable()
export class InscripcionService{

    constructor(private http:HttpClient){

    }


    getInscripcion(id: number):Observable<Inscripcion>{
      return this.http.get<Inscripcion>(`${environment.api}/inscripciones/${id}`, {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'encoding': 'UTF-8'
        })
      }).pipe(
        catchError(this.manejarError)
      )
      
    }


  obtenerInscripciones(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(`${environment.api}/inscripciones`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

 

  agregarInscripcion(curso: Inscripcion): Observable<Inscripcion>{
    return this.http.post<Inscripcion>(`${environment.api}/inscripciones/`, curso
    , {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError))
  }

  editarInscripcion(curso: Inscripcion){
   return this.http.put<Inscripcion>(`${environment.api}/inscripciones/${curso.id}`, curso).pipe(
      catchError(this.manejarError)
    );
  }

  eliminarInscripcion(id: number){
   return this.http.delete<Inscripcion>(`${environment.api}/inscripciones/${id}`).pipe(
      catchError(this.manejarError)
    )
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