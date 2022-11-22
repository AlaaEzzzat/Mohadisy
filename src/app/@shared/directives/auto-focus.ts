import {AfterViewInit,Renderer2, HostBinding, Directive,ElementRef} from '@angular/core'
  
@Directive({
    selector:'autofocus'
})
export class AutoFocus implements AfterViewInit{
  
    constructor(
        private elementRef: ElementRef,renderer: Renderer2
    ){
      renderer.setStyle(elementRef.nativeElement, 'border', '1px solid #000000');
    }
  
    ngAfterViewInit(){
        this.elementRef.nativeElement.focus();
        
    }
}