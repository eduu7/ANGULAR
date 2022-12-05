import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {
  fechaMayorIgualActual!:boolean;
  title! :string;
  _idEdit!:number;
  _action!:number;
  formAlumno: FormGroup = this.fb.group(
    {
      nombres: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      apellidos: new FormControl('', [Validators.required,Validators.minLength(2), Validators.maxLength(50)]),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.-]+@[a-z]+\\.[a-z]{2,3}$')]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(13),
      Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]),
      pais: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
    }
  )
  constructor(
    private alumnoService: AlumnoService,
    private fb:FormBuilder,
    private router: Router 
    // @Inject(MAT_DIALOG_DATA) public data?: any
  ) { 
    // console.log("cargado add alumno");
    // if(this.data.action==1){
    //   this.title='Agregar Alumno';
    // }
    // else{
    //   this.title='Editar Alumno';
    // }
    

  }

  ngOnInit(): void {
    // console.log("cargado add alumno");
    // if(this.data.action==1){
    //   console.log("Agregar");
    //   console.log(this.data);
    //   this._action=1;
    // }
    // if(this.data.action==2){
    //   console.log("Editar");
    //   console.log(this.data);
    //   this.formAlumno.controls['nombres'].setValue(this.data.name);
    //   this.formAlumno.controls['apellidos'].setValue(this.data.last_name);
    //   this.formAlumno.controls['correo'].setValue(this.data.email);
    //   this.formAlumno.controls['telefono'].setValue(this.data.phone);
    //   this.formAlumno.controls['pais'].setValue(this.data.country);
    //   this.formAlumno.controls['genero']?.setValue(this.data.gender);
    //   this.formAlumno.controls['fecha_nacimiento']?.setValue(this.data.birth_date);
    //   this._idEdit=this.data.id;
    //   this._action=2;
    // }
  }

  agregarAlumno(){
    //  console.log("agregar Alunno");
    var fechaN= this.formAlumno.value.fecha_nacimiento;
  
    // console.log(fechaN);
    var dt= this.formatDate(new Date());
    // console.log(dt);
    var fn= this.formatDate(fechaN);
    if(fn>=dt){
      this.fechaMayorIgualActual=true;
    }
     else{
      const alumno: alumno = {
        id: Math.round(Math.random()*1000),
        name: this.formAlumno.value.nombres,
        last_name:this.formAlumno.value.apellidos,
        birth_date:this.formAlumno.value.fecha_nacimiento,
        email:this.formAlumno.value.correo,
        phone:this.formAlumno.value.telefono,
        country:this.formAlumno.value.pais,
        gender:this.formAlumno.value.genero
      };
      // console.log(alumno);
      this.alumnoService.agregarAlumno(alumno);
      this.router.navigate(['alumnos/listado']);
     }
  }

  

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }


  formatDate(date: Date) {
    return date.getFullYear()+'-' +this.padTo2Digits(date.getMonth() + 1)+'-' +this.padTo2Digits(date.getDate());
       
  }
}
