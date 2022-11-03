import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListaAlumnos } from 'src/app/data/alumnos';
import { alumno } from 'src/app/models/alumno';
 
import { BehaviorSubject, filter, from, interval, map, mergeMap, Observable, of } from 'rxjs';
import { AlumnoService } from '../../services/alumno.service';
import { DeleteAlumnoComponent } from '../delete-alumno/delete-alumno.component';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos$!:Observable<alumno[]>
  constructor(
    private DeleteDialog: MatDialog,
    private alumnoService: AlumnoService,
    private router: Router
    // private addDialog: MatDialog,
    // private DeleteDialog: MatDialog
  ) { 
    
    
  
  }

  

  ngOnInit(): void {
   this.alumnos$=this.alumnoService.getAlumnos();
  }
  
  deleteStudent(alumno? : alumno){
    let dialog = this.DeleteDialog.open(DeleteAlumnoComponent, {
      width: '25%',
      height: 'auto',
      data: 
        alumno
       
    });

    dialog.beforeClosed().subscribe(res => {
      if(res.skipAction==0){
        console.log(res);
        this.alumnoService.eliminarAlumno(res.id);
     }
      
    })
  }

  editarAlumno(id: number){
    this.router.navigate(['alumnos/editar'], { queryParams: { id: id } });
  }
  
}
