import { createReducer, on } from "@ngrx/store";
import { Curso } from "src/app/models/curso";
import * as cursosActions  from './cursos.actions';

export const cursosFeatureKey='cursos';

export interface CursosState{
    cargando:boolean,
    cursos: Curso[]
}

export interface CursosStatev2{
    cursos: Curso[]
}


export interface CursoState{
    cargando:boolean,
    curso:Curso
}

export const initialObject: CursoState={
    cargando:false ,
    curso: { id: 0,
        name: '',
        hours: 0,
        img_url: '',
        teacher: '',
        difficulty: 0,
        startDate: new Date,
        endDate: new Date}
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

export const reducer2= createReducer(
    initialObject,
    on(cursosActions.cursoCargado, (state,{curso})=>{
        return state
    }),
)


