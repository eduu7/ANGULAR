import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Inscripcion } from 'src/app/models/inscripcion';
import { SharedService } from 'src/app/shared/shared.service';
import { InscripcionService } from '../../services/inscripcion.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  inscripciones$!: Observable<Inscripcion[]>;
  dataSource!: MatTableDataSource<Inscripcion>;
  columnas: string[] = ['id', 'curso', 'alumno', 'fecha inscripcion','acciones'];
  constructor(private sservice: SharedService,
    private inscService: InscripcionService,
    private router: Router,) { }

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    ngAfterViewInit() {
     setTimeout(() => this.dataSource.paginator = this.paginator, 1000);
     //  this.dataSource.paginator = this.paginator;
    }
 
   ngOnInit(): void {
     this.inscService.obtenerInscripciones().subscribe(
      (obj : Inscripcion[]) =>{
        this.dataSource = new MatTableDataSource<Inscripcion>(obj);
      }
     );
      
     
   }
  
}
