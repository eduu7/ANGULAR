import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { MaterialModule } from './Modules/material.module';
import { GenderPipe } from './pipes/gender.pipe';
import { TheadersDirective } from './core/directives/theaders.directive';
 import { CompleteNamePipe } from './pipes/complete-name.pipe';
 
import { CoreModule } from './core/core.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AppRoutingModule } from './app-routing.module';
import { CursosModule } from './cursos/cursos.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AutenticacionModule } from './autenticacion/autenticacion-module';
import { CommonModule } from '@angular/common';
import { AddInscripcionComponent } from './inscripciones/components/add-inscripcion/add-inscripcion.component';
import { DeleteInscripcionComponent } from './inscripciones/components/delete-inscripcion/delete-inscripcion.component';
import { InicioComponent } from './inscripciones/components/inicio/inicio.component';
import { ListadoComponent } from './inscripciones/components/listado/listado.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';

 
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,   
    GenderPipe,
    // TheadersDirective,
    CompleteNamePipe,
    AddInscripcionComponent,
    DeleteInscripcionComponent,
    InicioComponent,
    ListadoComponent,         
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    AlumnosModule,
    AutenticacionModule,
    CursosModule,
    CoreModule,
    SharedModule,
    FontAwesomeModule,
    StoreModule.forRoot({},{}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
