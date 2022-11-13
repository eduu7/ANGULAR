import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { MaterialModule } from './Modules/material.module';
import { GenderPipe } from './pipes/gender.pipe';
import { TheadersDirective } from './directives/theaders.directive';
 import { CompleteNamePipe } from './pipes/complete-name.pipe';
 
import { CoreModule } from './core/core.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AppRoutingModule } from './app-routing.module';
import { CursosModule } from './cursos/cursos.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

 
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,   
    GenderPipe,
    TheadersDirective,
    CompleteNamePipe,         
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    AlumnosModule,
    CursosModule,
    CoreModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }