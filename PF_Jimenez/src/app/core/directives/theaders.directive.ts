import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTheaders]'
})
export class TheadersDirective implements OnInit {
  // @Input('appTheaders') dir!: null;
  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { 
    
  }

  ngOnInit(): void {
    // console.log("init directive")
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '20px');
    this.renderer.setStyle(this.elemento.nativeElement, 'font-weight', 'bold');
  }
}
