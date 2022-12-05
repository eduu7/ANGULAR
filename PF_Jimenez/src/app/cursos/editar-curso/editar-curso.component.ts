import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from '../services/curso.service';
import { editarCurso } from '../state/cursos.actions';
import { CursosState } from '../state/cursos.reducer';
import { selectCursoById } from '../state/cursos.selectors';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  formulario!: FormGroup;
  _idEdit!:number;
  _subscribe!: Subscription;
  cursoTemp!: Curso;

  constructor(
    private router: Router,
    private cursoService: CursoService,
    private activatedRoute: ActivatedRoute,
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
    this.activatedRoute.queryParamMap.subscribe((parametros) => {
      // console.log(parametros);
      // this.id = parseInt(parametros.get('id') || '0');

      this._idEdit = parseInt(parametros.get('id')||'0');
        // alumno= this.alumnoService.getAlumno(id);
 

        // this.storeCursos.select(selectCursoById(this._idEdit)).subscribe((curso?: Curso) => {
        //   console.log('object curso: ');
        //   console.log(curso);
        //   // this.formulario = new FormGroup({
        //   //   nombre: new FormControl(curso.name),
        //   //   maestro: new FormControl(curso.teacher),
        //   //   horas: new FormControl(curso.hours),
        //   //   fechaInicio: new FormControl(curso.startDate),
        //   //   fechaFin: new FormControl(curso.endDate),
        //   //   dificultad: new FormControl(curso.difficulty)})
        // });

       this._subscribe= this.cursoService.getCurso(this._idEdit).subscribe(obj => {
          this.cursoTemp=obj;
          this.formulario = new FormGroup({
            nombre: new FormControl(this.cursoTemp.name),
            maestro: new FormControl(this.cursoTemp.teacher),
            horas: new FormControl(this.cursoTemp.hours),
            fechaInicio: new FormControl(this.cursoTemp.startDate),
            fechaFin: new FormControl(this.cursoTemp.endDate),
            dificultad: new FormControl(this.cursoTemp.difficulty)})
        });
      });
  }


  EditarCurso(){
    const i: Curso = {
     difficulty:this.formulario.value.dificultad,
     endDate: this.formulario.value.fechaFin,
     startDate: this.formulario.value.fechaInicio,
     hours: this.formulario.value.horas,
     id:this.formulario.value.id,
     name:this.formulario.value.nombre,
     teacher:this.formulario.value.maestro,
     img_url:''
    }
    // console.log(i);
    this.storeCursos.dispatch(editarCurso({curso: i}));
    this.router.navigate(['cursos/listado']);
  }

}
