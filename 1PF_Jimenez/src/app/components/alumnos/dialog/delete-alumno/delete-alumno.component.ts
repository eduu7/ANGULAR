import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-alumno',
  templateUrl: './delete-alumno.component.html',
  styleUrls: ['./delete-alumno.component.css']
})
export class DeleteAlumnoComponent implements OnInit {
  student_name!:string;
  constructor(
    public dialogRef: MatDialogRef<DeleteAlumnoComponent>,    
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) { 

    console.log("inject data");
    console.log(data);
    this.student_name=this.data.name;

  }

  ngOnInit(): void {
    
  }

  deleteStudent(){
    this.dialogRef.close(this.data);
  }


}
