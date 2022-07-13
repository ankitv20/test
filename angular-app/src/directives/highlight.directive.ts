// Attribute Directive changes the appearance or behavior of DOM elements and Angular components.

// Directive can be as an attribute, a class or as a module.

// el.ElementRef = 'el' refers to a DOM element here. 
// ElementRef is the data type for an element of DOM.

// HostBinding binds the mentioned property to the DOM element where the directive.
// @HostListener listens to a DOM event and with that we need to attach a DOM fuction.

// constructor(el:ElementRef) {
//   el.nativeElement.style.backgroundColor = "pink"
//  } // **not the recommended approach**

// ngOnInit(){
//   this.el.nativeElement.style.backgroundColor = "pink"  
//}



import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bgColor: any; // for predefined color with ngOnInit().

  @HostListener('mouseenter') // to act upon an event
  onEnter() {
    this.bgColor = "yellow";
  }

  @HostListener('mouseleave')
  onLeave() {
    this.bgColor = "transparent";
  }
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.bgColor = "green";
  }




}
