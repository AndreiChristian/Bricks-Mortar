import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infinite-text',
  templateUrl: './infinite-text.component.html',
  styleUrls: ['./infinite-text.component.css']
})
export class InfiniteTextComponent {
  @Input() textContent: string = 'Your scrolling text content goes here...';

  @ViewChild('marqueeContent', { static: false }) marqueeContent: ElementRef;

  ngAfterViewInit() {
    const contentWidth = this.marqueeContent.nativeElement.offsetWidth;
    const animationDuration = contentWidth / 100; // Adjust 50 to control speed.
    this.marqueeContent.nativeElement.style.animationDuration = `${animationDuration}s`;
  }

}
