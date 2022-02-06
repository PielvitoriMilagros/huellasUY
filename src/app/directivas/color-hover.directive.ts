import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appColorHover]'
})
export class ColorHoverDirective {

  @Input() appColorHover?:string;
 
  constructor(private element: ElementRef){}

  @HostListener('mouseenter')
  public onMouseEnter(){
      this.element.nativeElement.style.backgroundColor = this.appColorHover;
  }

  @HostListener('mouseleave')
  public onMouseLeave(){
      this.element.nativeElement.style.backgroundColor = '';
  }

}
