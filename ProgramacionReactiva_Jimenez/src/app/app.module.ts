import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { MaterialModule } from './Modules/material.module';
import { GenderPipe } from './pipes/gender.pipe';
import { TheadersDirective } from './directives/theaders.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAlumnoComponent } from './components/alumnos/dialog/add-alumno/add-alumno.component';
import { CompleteNamePipe } from './pipes/complete-name.pipe';
import { DeleteAlumnoComponent } from './components/alumnos/dialog/delete-alumno/delete-alumno.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    AlumnosComponent,
    GenderPipe,
    TheadersDirective,
    AddAlumnoComponent,
    CompleteNamePipe,
    DeleteAlumnoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
