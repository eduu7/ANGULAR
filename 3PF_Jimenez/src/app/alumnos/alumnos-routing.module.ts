import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlumnoComponent } from './componentes/add-alumno/add-alumno.component';
import { EditarAlumnoComponent } from './componentes/editar-alumno/editar-alumno.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AlumnosComponent } from './componentes/listado/alumnos.component';
 
 
 

const routes: Routes = [
  { path: 'alumnos', component: InicioComponent, children: [
    { path: 'listado', component: AlumnosComponent },
    { path: 'agregar', component: AddAlumnoComponent },
    { path: 'editar', component: EditarAlumnoComponent },
    
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
export class AlumnosRoutingModule { }
