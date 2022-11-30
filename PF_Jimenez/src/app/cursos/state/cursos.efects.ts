import { Injectable } from "@angular/core";
import { createEffect,Actions,ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Curso } from "src/app/models/curso";
import { inscripcion } from "src/app/models/inscripcion";
import { CursoService } from "../services/curso.service";
import * as CursosActions from './cursos.actions';

@Injectable()
export class CursosEffects{
cargarCursos$ = createEffect( ()=>{
    return this.actions$.pipe(
        ofType(CursosActions.cargarCursos),
        concatMap(()=> this.cursos.obtenerCursos().pipe(
          map((i: Curso[])=> CursosActions.cursosCargados({curso:i}))
        ))
    );
});

agregarCurso$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(CursosActions.agregarCurso),
      concatMap(({ curso }) => this.cursos.agregarCurso(curso).pipe(
        map((i: Curso) => CursosActions.cargarCursos())
      ))
    );
  });

  eliminarCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.eliminarCurso),
      concatMap(({ curso }) => this.cursos.eliminarCurso(curso.id).pipe(
        map((i: Curso) => CursosActions.cargarCursos())
      ))
    );
  });

  editarCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.editarCurso),
      concatMap(({ curso }) => this.cursos.editarCurso(curso).pipe(
        map((i: Curso) => CursosActions.cargarCursos())
      ))
    );
  });



constructor(
    private actions$:Actions,
    private cursos:CursoService
){

}

}