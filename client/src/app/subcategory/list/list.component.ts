import { Component } from '@angular/core';
import { Subcategory } from 'src/app/models/models';
import { SubcategoryService } from "../subcategory.service"
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private subcategoryService: SubcategoryService) { }

}
