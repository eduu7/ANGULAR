import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formAlumno: FormGroup;
  fechaMayorIgualActual!:boolean;
  constructor( private fb: FormBuilder
    ) {
      this.formAlumno = fb.group({
        nombres: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
        apellidos: new FormControl('', [Validators.required,Validators.minLength(2), Validators.maxLength(50)]),
        fecha_nacimiento: new FormControl('', [Validators.required]),
        correo: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.-]+@[a-z]+\\.[a-z]{2,3}$')]),
        telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(13),
        Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]),
        curso: new FormControl('', [Validators.required]),
        
         
      });
    }

  ngOnInit(): void {
  }

  agregarAlumno(){
    var fechaN= this.formAlumno.value.fecha_nacimiento;
    console.log(fechaN);
    var dt= this.formatDate(new Date());
    console.log(dt);
    if(fechaN>=dt){
      this.fechaMayorIgualActual=true;
    }
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  formatDate(date: Date) {
    return date.getFullYear()+'-' +this.padTo2Digits(date.getMonth() + 1)+'-' +this.padTo2Digits(date.getDate());
       
  }

}
