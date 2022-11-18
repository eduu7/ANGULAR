import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticacion/components/login/login.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes:Routes=[
{ path: 'inicio', component: InicioComponent,
 canActivate: [AuthGuard]
 },
{ 
  path: 'alumnos',
  loadChildren: () => import('./alumnos/alumnos.module').then((m) => m.AlumnosModule),
  canActivate: [AuthGuard]
},
{ 
  path: 'cursos',
  loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
  canActivate: [AuthGuard]
},
{ 
  path: 'autenticacion',
  loadChildren: () => import('./autenticacion/autenticacion-module').then((m) => m.AutenticacionModule)
},
  // { 
  //   path: 'inscripciones',
  //   loadChildren: () => import('./inscripciones/ins.module').then((m) => m.CursosModule),
  //   canActivate: [AuthGuard]
  // },
{ path: '', redirectTo: 'inicio', pathMatch: 'full'},
// { path: '**', component: PaginaNoEncontradaComponent }

]

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule{}