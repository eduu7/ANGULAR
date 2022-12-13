import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from '../core/components/toolbar/toolbar.component';
import { MaterialModule } from '../Modules/material.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { DeleteInscripcionComponent } from './components/delete-inscripcion/delete-inscripcion.component';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionService } from './services/inscripcion.service';
import { InicioComponent } from './components/inicio/inicio.component';
import { DirectivesModule } from '../Modules/directive.module';
import { AgregarInscripcionComponent } from './components/agregar-inscripcion/agregar-inscripcion.component';

@NgModule({
  declarations: [
    InicioComponent,
    ListadoComponent,
    DeleteInscripcionComponent,
    AgregarInscripcionComponent,
 
    // ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,    
    InscripcionesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    DirectivesModule,
    SharedModule
  ],
  providers: [
    InscripcionService
  ]
})
export class InscripcionesModule { }
