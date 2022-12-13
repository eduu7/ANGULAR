import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AuthGuard } from '../core/guards/auth.guard';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoComponent } from './listado/listado.component';
 
 

const routes: Routes = [
  { path: '', component: InicioComponent ,canActivateChild: [AuthGuard], children: [
    { path: 'listado', component: ListadoComponent },
    { path: 'agregar', component: AgregarCursoComponent, canActivate: [AdminGuard] },
    { path: 'editar', component: EditarCursoComponent , canActivate: [AdminGuard]},
    
  ]}];

@NgModule({
imports: [
  RouterModule.forChild(routes)
],
exports: [
  RouterModule
]
})
export class CursosRoutingModule { }
