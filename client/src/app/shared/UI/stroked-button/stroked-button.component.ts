import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stroked-button',
  templateUrl: './stroked-button.component.html',
  styleUrls: ['./stroked-button.component.css']
})
export class StrokedButtonComponent {
  @Input() text: string;
}
