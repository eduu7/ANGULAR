import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.toogleClass();
 }

  toogleClass(){
    // console.log("asa");
    var s=document.querySelector(".hamburger");
    // console.log(s);
    // s?.addEventListener("")
    var as= document.querySelector("body");
    // console.log(as);
    document.querySelector("body")?.classList.toggle("active");
    // this.renderer.addClass(document.body,"active");
  //   var hamburger = document.querySelector(".hamburger");
  //   debugger;
  //  hamburger.addEventListener("click", function(){
  //    document.querySelector("body").classList.toggle("active");
  //  })
  }
}
