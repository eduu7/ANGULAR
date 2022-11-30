import { createReducer, on } from "@ngrx/store";
import { Curso } from "src/app/models/curso";
import * as cursosActions  from './cursos.actions';

export const cursosFeatureKey='cursos';

export interface CursosState{
    cargando:boolean,
    cursos: Curso[]
}

export const initialState: CursosState={
    cargando:false,
    cursos:[]
}

export const reducer= createReducer(
initialState,
on(cursosActions.cargarCursos,(state)=>{
    return {...state, cargando:true}
}),
on(cursosActions.cursosCargados, (state, {curso})=>{
    return {...state, cargando:false, cursos: curso}
}),
on(cursosActions.agregarCurso, (state,{curso})=>{
    return state
}),
on(cursosActions.editarCurso,(state, {curso})=>{
    return state
}),
on(cursosActions.eliminarCurso, (state, {curso})=>{
    return state
})
);

