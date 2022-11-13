import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private sservice: SharedService) {
    this.sservice.setTitle("Listado Cursos");
   }

  ngOnInit(): void {
    
  }

}
