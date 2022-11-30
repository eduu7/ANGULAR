import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SesionService } from './services/sesion.service';
import { MaterialModule } from '../Modules/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    InicioComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  providers: [
    SesionService
  ],
  exports:[
    FontAwesomeModule
  ]
})
export class CoreModule { }
