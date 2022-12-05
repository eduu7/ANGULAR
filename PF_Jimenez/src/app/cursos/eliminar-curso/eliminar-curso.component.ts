import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-curso',
  templateUrl: './eliminar-curso.component.html',
  styleUrls: ['./eliminar-curso.component.css']
})
export class EliminarCursoComponent implements OnInit {
  curso_name!:string;
  constructor( public dialogRef: MatDialogRef<EliminarCursoComponent>,    
    @Inject(MAT_DIALOG_DATA) public data?: any) { 
      this.curso_name=this.data.name;
    }

  ngOnInit(): void {

  }


  deleteCurso(){
    // console.log("this.close");
    var dtSend={
      ...this.data,
      skipAction:0
    }
    this.dialogRef.close(dtSend);
  }

  closemodal(){
    var dtSend={
      ...this.data,
      skipAction:1
    }
    this.dialogRef.close(dtSend);
  }
}
