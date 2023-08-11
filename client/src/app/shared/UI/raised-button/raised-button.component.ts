import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.css']
})
export class RaisedButtonComponent {
  @Input() text: string;
}
