import { Directive, ElementRef, HostListener, Input, Renderer2, input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  backgroundColor:string = 'yellow'

  @Input()
  appHighLight!:string

  @HostListener('mouseover')
  public onMouseOver(){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.appHighLight)
  }

  @HostListener('mouseout')
  public onMouseOut(){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent')
  }

  constructor(private element:ElementRef, private renderer:Renderer2) { 
    console.log('HighLightDirective constructor')
    console.log(this.element)
    //this.element.nativeElement.style.color='red'

    renderer.setStyle(this.element.nativeElement, 'color', 'green')
  }

}
