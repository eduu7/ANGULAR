import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoComponent } from './listado/listado.component';
 
 

const routes: Routes = [
  { path: '', component: InicioComponent , children: [
    { path: 'listado', component: ListadoComponent },
    { path: 'agregar', component: AgregarCursoComponent },
    { path: 'editar', component: EditarCursoComponent },
    
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
