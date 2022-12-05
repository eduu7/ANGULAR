import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DeleteAlumnoComponent } from 'src/app/alumnos/componentes/delete-alumno/delete-alumno.component';
import { Curso } from 'src/app/models/curso';
import { Session } from 'src/app/models/session';
import { usuario } from 'src/app/models/usuario';
import { SharedService } from 'src/app/shared/shared.service';
import { CursoService } from '../services/curso.service';
import { cargarCursos, cursosCargados, eliminarCurso, loadCursosFailure } from '../state/cursos.actions';
import { CursosState } from '../state/cursos.reducer';
import { selectCursos, selectCursosCargando, selectCursosState } from '../state/cursos.selectors';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  dataSource!: MatTableDataSource<Curso>;
  cursos$!: Observable<Curso[]>;
  usuarioActivo?: usuario;
  cursoSeleccionado!: Curso;
  columnas: string[] = ['id', 'curso', 'maestro', 'dificultad', 'horas', 'Fecha Inicio', 'Fecha Fin','acciones'];

  constructor(
    private DeleteDialog: MatDialog,
    private sservice: SharedService,
    private router: Router,
    private storeCursos: Store<CursosState>,
    private storeSesion: Store<Session>,
    private dialog: MatDialog
    ) {
    // this.sservice.setTitle("Listado Cursos");
    //   console.log('listadoooooo');
   }

   @ViewChild(MatPaginator) paginator!: MatPaginator;
   ngAfterViewInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator, 1000);
    //  this.dataSource.paginator = this.paginator;
   }

  ngOnInit(): void {
    this.storeCursos.dispatch(cargarCursos());
    this.storeCursos.select(selectCursos).subscribe((curso: Curso[]) => {
      this.dataSource = new MatTableDataSource<Curso>(curso);
    });
    
    this.cursos$ = this.storeCursos.select(selectCursos);
    // this.storeSesion.select(selectSesionActiva).subscribe((sesion: Curso) => {
    //   this.usuarioActivo = sesion.usuarioActivo;
    // })
  }
 

  editarCurso(_id: number){
    // console.log('Editar curso parametro: '+_id);
    this.router.navigate(['cursos/editar'], { queryParams: { id: _id } });
  }
 
  deleteCurso(curso? : Curso){
    let dialog = this.DeleteDialog.open(DeleteAlumnoComponent, {
      width: '25%',
      height: 'auto',
      data: 
      curso
       
    });

    dialog.beforeClosed().subscribe(res => {
      if(res.skipAction==0){
        // console.log('Eliminar curso');
        // console.log(res);
        var obj= res as Curso;
        this.storeCursos.dispatch(eliminarCurso({curso: obj}));
        setTimeout(() => this.dataSource.paginator = this.paginator, 1000);
     }
      
    })
  }

}
