import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  activeIndex: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startChangingBackground();
  }

  startChangingBackground(): void {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % 4;
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
