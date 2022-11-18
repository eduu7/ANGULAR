import { Component, OnInit } from '@angular/core';
import { faHome, faGraduationCap, faUsers, faBook, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Session } from 'src/app/models/session';
import { SharedService } from 'src/app/shared/shared.service';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sesion$!: Observable<Session>;
  faHome = faHome;
  faGraduationCap= faGraduationCap;
  faUsers= faUsers;
  faBook=faBook;
  faAddressCard=faAddressCard;
   
  constructor(private sesionService: SesionService) { }

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerSesion();
  }

}
