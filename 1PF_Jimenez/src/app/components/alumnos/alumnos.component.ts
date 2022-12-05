import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListaAlumnos } from 'src/app/data/alumnos';
import { alumno } from 'src/app/models/alumno';
import { AddAlumnoComponent } from './dialog/add-alumno/add-alumno.component';
import { DeleteAlumnoComponent } from './dialog/delete-alumno/delete-alumno.component';
 
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit, AfterViewInit {
 
  dataInicial=ListaAlumnos;
  columns: string []=['nombre', 'genero', 'pais', 'correo','fecha nacimiento', 'telefono', 'accion'];
  AlumnosDataSource= new MatTableDataSource<alumno>(this.dataInicial);

  constructor(
    private addDialog: MatDialog,
    private DeleteDialog: MatDialog
  ) { 
  
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.AlumnosDataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    
  }

  openDialog(alumno? :alumno, _action :number=1) {
    let dialog = this.addDialog.open(AddAlumnoComponent, {
      width: '50%',
      height: 'auto',
      data:{
        ...alumno,
        action:_action
      }
    });

    dialog.beforeClosed().subscribe(res => {
      if(res.skipAction==0){
        // console.log("Edit modal closed");
        // console.log(res);
       
        // console.log("object parsed")
        // console.log(objParsed);
        if(res.action==2){
          var dt= this.dataInicial.find(x=>x.id==res.id);
          dt!.name=res.nombres;
          dt!.last_name=res.apellidos;
          dt!.country=res.pais;
          dt!.email=res.correo;
          dt!.gender=res.genero;
          dt!.birth_date=res.fecha_nacimiento;
          dt!.phone=res.telefono;
          
        }
        else{
          var objParsed= {
            id:Math.floor(Date.now() / 1000),
            name:res.nombres,
            last_name:res.apellidos,
            gender:res.genero,
            country:res.pais,
            phone:res.telefono,
            email:res.correo,
            birth_date:res.fecha_nacimiento
          };
  
          this.dataInicial.push(objParsed);
        }
      
        this.AlumnosDataSource.data = this.dataInicial
      }
     
    })
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
        // console.log(res);
        let position = this.dataInicial.findIndex(persona => persona.id == res.id)
        this.dataInicial.splice(position, 1);
        this.AlumnosDataSource.data = this.dataInicial;
     }
      
    })

  }
}
