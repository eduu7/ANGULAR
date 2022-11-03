import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from '../core/components/toolbar/toolbar.component';
import { MaterialModule } from '../Modules/material.module';
import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from './cursos-routing.module';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    AgregarCursoComponent,
    EditarCursoComponent,
    ListadoComponent,
    // ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,    
    CursosRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    
  ]
})
export class CursosModule { }
