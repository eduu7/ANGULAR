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
import { InicioComponent } from './inicio/inicio.component';
import { StoreModule } from '@ngrx/store';
import { cursosFeatureKey, reducer } from './state/cursos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './state/cursos.efects';
import { CursoService } from './services/curso.service';
import { TheadersDirective } from '../core/directives/theaders.directive';
import { EliminarCursoComponent } from './eliminar-curso/eliminar-curso.component';
import { DirectivesModule } from '../Modules/directive.module';

@NgModule({
  declarations: [
    AgregarCursoComponent,
    EditarCursoComponent,
    ListadoComponent,
    InicioComponent,
    EliminarCursoComponent,
    // ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,    
    CursosRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    DirectivesModule,
    StoreModule.forFeature(cursosFeatureKey, reducer),
    EffectsModule.forFeature([CursosEffects])
  ],
  providers:[
    CursoService
  ]
})
export class CursosModule { }
