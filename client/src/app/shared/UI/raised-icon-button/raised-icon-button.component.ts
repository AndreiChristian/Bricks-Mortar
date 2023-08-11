import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-raised-icon-button',
  templateUrl: './raised-icon-button.component.html',
  styleUrls: ['./raised-icon-button.component.css']
})
export class RaisedIconButtonComponent {

  @Input() icon:string;
  @Input() text:string;

}
