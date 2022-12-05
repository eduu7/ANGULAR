import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Session } from 'src/app/models/session';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesionSubject!: BehaviorSubject<Session>;

  constructor() {
    const session: Session = {
      active: false
    };
    this.sesionSubject = new BehaviorSubject(session);
  }

  login(_user: string, _password: string, _admin: boolean){
    const sesion: Session = {
      active: true,
      user: {
        user: _user,
        password: _password,
        isAdmin: _admin
      }
    }
    // console.log(sesion);
    this.sesionSubject.next(sesion);
  }

  obtenerSesion(): Observable<Session>{
    return this.sesionSubject.asObservable();
  }
}