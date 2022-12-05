import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from '../core/components/toolbar/toolbar.component';
import { MaterialModule } from '../Modules/material.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { AddInscripcionComponent } from './components/add-inscripcion/add-inscripcion.component';
import { DeleteInscripcionComponent } from './components/delete-inscripcion/delete-inscripcion.component';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionService } from './services/inscripcion.service';
import { InicioComponent } from './components/inicio/inicio.component';
import { DirectivesModule } from '../Modules/directive.module';

@NgModule({
  declarations: [
    InicioComponent,
    ListadoComponent,
    AddInscripcionComponent,
    DeleteInscripcionComponent,
 
    // ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,    
    InscripcionesRoutingModule,
    ReactiveFormsModule,
    DirectivesModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    InscripcionService
  ]
})
export class InscripcionesModule { }
