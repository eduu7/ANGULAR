import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AuthGuard } from '../core/guards/auth.guard';
import { ListadoComponent } from '../inscripciones/components/listado/listado.component';
import { AgregarInscripcionComponent } from './components/agregar-inscripcion/agregar-inscripcion.component';
import { DeleteInscripcionComponent } from './components/delete-inscripcion/delete-inscripcion.component';
import {InicioComponent} from './components/inicio/inicio.component'
 
 

const routes: Routes = [
  { path: '', component: ListadoComponent, canActivateChild: [AuthGuard] ,children: [
    { path: 'listado', component: ListadoComponent },
    { path: 'agregar', component: AgregarInscripcionComponent, canActivate: [AdminGuard] },   
    { path: 'eliminar', component: DeleteInscripcionComponent ,canActivate: [AdminGuard]},
    
  ]}   
];

@NgModule({
imports: [
  RouterModule.forChild(routes)
],
exports: [
  RouterModule
]
})
export class InscripcionesRoutingModule { }
