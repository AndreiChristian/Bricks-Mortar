import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { imageUrls } from 'src/app/constants/constants';
import { Item } from 'src/app/models/models';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {

  craneImage = imageUrls.crane

  display: string = "grid"

  @Input() items$: Observable<Item[]>

}
