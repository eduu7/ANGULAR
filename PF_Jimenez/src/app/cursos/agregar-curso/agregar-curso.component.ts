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

  

  agregarCurso(_curso: Curso){
    // if(this.usuarioActivo){
      const curso: Curso = {
        id: 0,
        difficulty:_curso.difficulty,
        endDate:_curso.endDate,
        hours:_curso.hours,
        img_url:'',
        name:_curso.name,
        startDate:_curso.startDate,
        teacher:_curso.teacher
      };
      this.storeCursos.dispatch(agregarCurso({curso}));
    // }
  }

}
