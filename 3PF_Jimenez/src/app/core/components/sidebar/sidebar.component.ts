import { Component, OnInit } from '@angular/core';
import { faHome, faGraduationCap, faUsers, faBook, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faHome = faHome;
  faGraduationCap= faGraduationCap;
  faUsers= faUsers;
  faBook=faBook;
  faAddressCard=faAddressCard;
   
  constructor() { }

  ngOnInit(): void {
   
  }

}
