import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  sub!: Subscription;
  title$!: Observable<any>
  constructor(private sshared: SharedService) { 

   
  }

  ngOnInit(): void {
    // console.log("toolbar created");

    this.sshared.resultList$.subscribe(resultList => {
      // console.log('This is the updated resultList: ', resultList)
    } );
  //   this.sub=this.sshared.listenYourVariable().subscribe(
  //     (res)=>{
  //       console.log("changed value");
  //       this.title$=res;
  //     }
      

  // )
  }

}
