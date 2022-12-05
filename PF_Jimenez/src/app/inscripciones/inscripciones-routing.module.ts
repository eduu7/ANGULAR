import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from '../inscripciones/components/listado/listado.component';
import { AddInscripcionComponent } from './components/add-inscripcion/add-inscripcion.component';
import { DeleteInscripcionComponent } from './components/delete-inscripcion/delete-inscripcion.component';
import {InicioComponent} from './components/inicio/inicio.component'
 
 

const routes: Routes = [
  { path: '', component: ListadoComponent, children: [
    { path: 'listado', component: ListadoComponent },
    { path: 'agregar', component: AddInscripcionComponent },
    // { path: 'editar', component: EditarAlumnoComponent },
    { path: 'eliminar', component: DeleteInscripcionComponent },
    
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
