import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit, OnDestroy {
  fechaMayorIgualActual!:boolean;
  alumnovws!: alumno;
  _subscribe!: Subscription;
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
    private activatedRoute: ActivatedRoute,
    private alumnoService: AlumnoService,
    private router: Router,
    private fb:FormBuilder
  ) { 

    console.log("Editar component");
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((parametros) => {
      console.log(parametros);
      // this.id = parseInt(parametros.get('id') || '0');

      this._idEdit = parseInt(parametros.get('id')||'0');
        // alumno= this.alumnoService.getAlumno(id);
       
       this._subscribe= this.alumnoService.getAlumno(this._idEdit).subscribe(obj => {
         this.alumnovws=obj;
          this.formAlumno = new FormGroup({
          nombres: new FormControl(this.alumnovws?.name),
          apellidos: new FormControl(this.alumnovws?.last_name),
          correo: new FormControl(this.alumnovws?.email),
          pais: new FormControl(this.alumnovws?.country),
          genero: new FormControl(this.alumnovws?.gender),
          telefono: new FormControl(this.alumnovws?.phone),
          fecha_nacimiento: new FormControl(this.alumnovws?.birth_date)
        });
      });
       
         

        
      
  })}

  EditarAlumno(){
    let a: alumno = {
      id: this._idEdit,
      name: this.formAlumno.value.nombres,
      last_name: this.formAlumno.value.apellidos,
      email:this.formAlumno.value.correo,
      country:this.formAlumno.value.pais,
      gender:this.formAlumno.value.genero,
      birth_date:this.formAlumno.value.fecha_nacimiento,
      phone:this.formAlumno.value.telefono,
      img_url:'https://annemariesegal.files.wordpress.com/2017/04/adobestock_86346713-cropped-young-woman-in-suit.jpg?w=750'
    }

    console.log(a)
    this.alumnoService.editarAlumno(a);

    this.router.navigate(['alumnos/listado'])
  }


  ngOnDestroy(): void {
    this._subscribe.unsubscribe();
  }

}
