import { Component, Renderer2 } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { SharedService } from './shared/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1PF_Jimenez';
  faBars=faBars;
  $titulo!: Observable<any>;
  constructor(private renderer: Renderer2,private sshared: SharedService){
    // this.Title=sshared.title!;
    this.$titulo = sshared._title$;
  }

  toogleClass(){
    console.log("asa");
    var s=document.querySelector(".hamburger");
    console.log(s);
    // s?.addEventListener("")
    var as= document.querySelector("body");
    console.log(as);
    document.querySelector("body")?.classList.toggle("active");
    // this.renderer.addClass(document.body,"active");
  //   var hamburger = document.querySelector(".hamburger");
  //   debugger;
  //  hamburger.addEventListener("click", function(){
  //    document.querySelector("body").classList.toggle("active");
  //  })
  }

}
