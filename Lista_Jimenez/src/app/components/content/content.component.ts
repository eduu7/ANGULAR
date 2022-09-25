import { Component, OnInit } from '@angular/core';
import { alumno } from 'src/app/models/alumno';
import { subject } from 'src/app/models/subject';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  AlumnosList:Array<alumno> = new Array<alumno>();
  constructor() {
    this.FillData();

   }

  ngOnInit(): void {
  }

  FillData():void{
  let sub1= new subject("CD01", "Calculo diferencial");
  let sub2= new subject("ALC1", "Algebra Lineal 1");
  let sub3= new subject("INV2", "Taller Investigación 2");
  let sub4= new subject("ECDD", "Ecuaciones Diferenciales");
  let sub5= new subject("FS03", "Fisica 3");

  let mat1= new Array<subject>();
  mat1.push(sub1,sub2, sub3);
  let _al= new alumno(
    "RAGZ2001",
    "Raul Alberto", 
    "Gomez Zamora", 
    "Dr Lazaro Cardenas #112 Colima, Colima, CP 2121", 
    new Date(2000, 5, 5, 17, 24, 42, 11),
    22,
    "asdsa",
    mat1,
    false
    );
  this.AlumnosList.push(_al);

  let mat2= new Array<subject>();
  mat2.push(sub1,sub2, sub3, sub4);
  let _al2= new alumno(
    "22F021",
    "Pedro", 
    "Sanchez", 
    "Calle los Pinos #134 Mina, NL CP 321", 
    new Date(1999, 4, 4, 17, 23, 42, 11),
    23,
    "asdsa",
    mat2,
    true
    );
  this.AlumnosList.push(_al2);


  let mat3= new Array<subject>();
  mat3.push(sub1,sub2, sub3);
  let _al3= new alumno(
    "22F021",
    "Clinton", 
    "Cremin", 
    "3228 South Service Rd, Burlington, Ontario", 
    new Date(1998, 4, 4, 17, 23, 42, 11),
    24,
    "asdsa",
    mat3,
    true
    );
  this.AlumnosList.push(_al3);


  let mat4= new Array<subject>();
  mat4.push(sub1,sub2, sub3);
  let _al4= new alumno(
    "22F021",
    "Brandom", 
    "Bashirian", 
    "Lynchburg, VA 24502, Vermont", 
    new Date(1998, 4, 4, 17, 23, 42, 11),
    24,
    "asdsa",
    mat4,
    true
    );
  this.AlumnosList.push(_al4);



  let mat5= new Array<subject>();
  mat5.push(sub1,sub2, sub3,sub4, sub5);
  let _al5= new alumno(
    "22F021",
    "Ernestine", 
    "M Lawrence", 
    "2317 Dark Hollow Road, Camden, New Jersey(NJ), 08102", 
    new Date(2000, 4, 4, 17, 23, 42, 11),
    22,
    "asdsa",
    mat5,
    true
    );
  this.AlumnosList.push(_al5);



  let mat6= new Array<subject>();
  mat6.push(sub1,sub2, sub3);
  let _al6= new alumno(
    "22F021",
    "Kenneth", 
    "A Parks", 
    "946 Wilkinson Court Fort Myers, Florida(FL), 33912", 
    new Date(1999, 4, 4, 17, 23, 42, 11),
    23,
    "asdsa",
    mat6,
    true
    );
  this.AlumnosList.push(_al6);



  let mat7= new Array<subject>();
  mat7.push(sub1,sub4, sub3, sub5);
  let _al7= new alumno(
    "22F021",
    "Gary", 
    "M Belser", 
    "2051 Duffy Street, Portage, Indiana(IN), 46383", 
    new Date(1997, 4, 4, 17, 23, 42, 11),
    25,
    "asdsa",
    mat7,
    true
    );
  this.AlumnosList.push(_al7);




  }

}
