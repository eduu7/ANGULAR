import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CursosState } from '../state/cursos.reducer';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { agregarCurso } from '../state/cursos.actions';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})

export class AgregarCursoComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private router: Router,
    private storeCursos: Store<CursosState>,
  ) {

    this.formulario = new FormGroup({
      nombre: new FormControl(),
      maestro: new FormControl(),
      horas: new FormControl(),
      fechaInicio: new FormControl(),
      fechaFin: new FormControl(),
      dificultad: new FormControl()
    });
   }

  ngOnInit(): void {
  }

  

  agregarCurso(){
    // if(this.usuarioActivo){
      const curso: Curso = {
        id: Math.round(Math.random()*1000),
        difficulty:this.formulario.value.dificultad,
        endDate:this.formulario.value.fechaFin,
        hours:this.formulario.value.horas,
        img_url:'',
        name:this.formulario.value.nombre,
        startDate:this.formulario.value.fechaInicio,
        teacher:this.formulario.value.teacher
      };
      this.storeCursos.dispatch(agregarCurso({curso}));
      this.router.navigate(['cursos/listado']);
    // }
  }

}
