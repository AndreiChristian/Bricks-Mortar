import { Component } from '@angular/core';
import { imageUrls } from 'src/app/constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tower = imageUrls.tower;

}
