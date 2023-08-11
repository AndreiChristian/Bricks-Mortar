import { Component } from '@angular/core';
import { imageUrls } from 'src/app/constants/constants';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  tower = imageUrls.tower

}
