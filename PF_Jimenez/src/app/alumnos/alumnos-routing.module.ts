import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AuthGuard } from '../core/guards/auth.guard';
import { AddAlumnoComponent } from './componentes/add-alumno/add-alumno.component';
import { DeleteAlumnoComponent } from './componentes/delete-alumno/delete-alumno.component';
import { EditarAlumnoComponent } from './componentes/editar-alumno/editar-alumno.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AlumnosComponent } from './componentes/listado/alumnos.component';
 
 
 

const routes: Routes = [
  { path: '', component: InicioComponent,canActivateChild: [AuthGuard],  children: [
    { path: 'listado', component: AlumnosComponent },
    { path: 'agregar', component: AddAlumnoComponent , canActivate: [AdminGuard]},
    { path: 'editar', component: EditarAlumnoComponent, canActivate: [AdminGuard] },
    { path: 'eliminar', component: DeleteAlumnoComponent , canActivate: [AdminGuard]},
    
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
