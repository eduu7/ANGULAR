import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoComponent } from './listado/listado.component';
 
 

const routes: Routes = [
  { path: 'cursos', component: InicioComponent , children: [
    { path: 'listado', component: ListadoComponent },
 
    
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
