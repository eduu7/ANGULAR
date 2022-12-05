import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Curso } from "src/app/models/curso";
import * as fromCursos from './cursos.reducer';


export const selectCursosState=createFeatureSelector<fromCursos.CursosState>(
fromCursos.cursosFeatureKey
);

export const selectCursoState=createFeatureSelector<fromCursos.CursoState>(
    fromCursos.cursosFeatureKey
    );

export const selectCursosCargando= createSelector(
    selectCursosState,
    (state)=> state.cargando
)

export const selectCursos= createSelector(
    selectCursosState,
    (state)=> state.cursos
)
 
// export const selectCurso= createSelector(
//     selectCursoState,
//     (cursos:Curso[]) => state.curso
// )


 
 

export const selectCursoqw = (state: fromCursos.CursosStatev2) => state.cursos;

// selector with param
export const selectCursoById = (id: number) =>
  createSelector(
    selectCursoqw, 
    (cursos: Curso[]) => {
        // console.log(cursos);
        
        return cursos.find(c => c.id === id) 
    }    
   
  )