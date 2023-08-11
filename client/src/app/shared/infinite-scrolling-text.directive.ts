import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInfiniteScrollingText]'
})
export class InfiniteScrollingTextDirective {

  @Input() direction: 'ltr' | 'rtl' = 'rtl';
  @Input() activateOnHover: boolean = false;

  private isHovering = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.duplicateText();
    this.setStyles();

    if (!this.activateOnHover) {
      this.startAnimation();
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.activateOnHover) {
      this.startAnimation();
    }
    this.isHovering = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.activateOnHover) {
      this.stopAnimation();
    }
    this.isHovering = false;
  }

  private duplicateText() {
    const text = this.el.nativeElement.textContent;
    let newText = ""
    for (let i = 0; i < 50; i++) {
      newText += text + "      "
    }
    // this.el.nativeElement.textContent = text + " " + text + " " + text + " " + text;
    this.el.nativeElement.textContent = newText
  }

  private setStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'white-space', 'nowrap');
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.el.nativeElement, 'display', 'inline-block');
  }

  private startAnimation() {
    const contentWidth = this.el.nativeElement.offsetWidth / 2; // divide by 2 because we duplicated the content
    const animationDuration = contentWidth / 50 + 's';  // Adjust 50 to control speed

    let animationName = this.direction === 'rtl' ? 'marqueeRtl' : 'marqueeLtr';

    this.renderer.setStyle(this.el.nativeElement, 'animation', `${animationName} ${animationDuration} infinite linear`);
  }

  private stopAnimation() {
    this.renderer.removeStyle(this.el.nativeElement, 'animation');
  }

}
