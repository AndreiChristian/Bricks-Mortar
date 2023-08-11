import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stroked-icon-button',
  templateUrl: './stroked-icon-button.component.html',
  styleUrls: ['./stroked-icon-button.component.css']
})
export class StrokedIconButtonComponent {
  @Input() icon: string;
  @Input() text: string;
}
