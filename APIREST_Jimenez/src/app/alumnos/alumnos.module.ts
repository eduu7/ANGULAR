import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from '../core/components/toolbar/toolbar.component';
import { MaterialModule } from '../Modules/material.module';
import { SharedModule } from '../shared/shared.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';
 

import { RouterModule } from '@angular/router';
import { AddAlumnoComponent } from './componentes/add-alumno/add-alumno.component';
import { DeleteAlumnoComponent } from './componentes/delete-alumno/delete-alumno.component';
import { AlumnoService } from './services/alumno.service';
import { TestComponent } from './componentes/test/test.component';
import { AlumnosComponent } from './componentes/listado/alumnos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EditarAlumnoComponent } from './componentes/editar-alumno/editar-alumno.component';

@NgModule({
  declarations: [
    AlumnosComponent,
    AddAlumnoComponent,
    DeleteAlumnoComponent,
    InicioComponent,
    EditarAlumnoComponent
    // ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,    
    AlumnosRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    AlumnoService
  ]
})
export class AlumnosModule { }
