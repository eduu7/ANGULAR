import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Session } from 'src/app/models/session';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate , CanLoad{

constructor(
  private sesion: SesionService,
    private router: Router
){
  
}

canLoad(
  route: Route,
  segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sesion.obtenerSesion().pipe(
      map((sesion: Session) => {
        if(sesion.user?.isAdmin){
          return true;
        }else{
          alert("No tiene permisos para acceder a este sitio");
          this.router.navigate(['inicio']);
          return false;
        }
      })
    );
}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesion.obtenerSesion().pipe(
        map((sesion: Session) => {
          if(sesion.user?.isAdmin){
            return true;
          }else{
            alert("No tiene permisos para acceder a este sitio");
            this.router.navigate(['inicio']);
            return false;
          }
        })
      );
  }
  
}
