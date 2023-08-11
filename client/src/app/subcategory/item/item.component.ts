import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from '../subcategory.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Item, Subcategory } from 'src/app/models/models';
import { imageUrls } from 'src/app/constants/constants';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  craneImage = imageUrls.crane

  id: string;
  subcategory$: Observable<Subcategory>
  items$: Observable<Item[]>

  constructor(private subcategoryService: SubcategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.subcategoryService.getCategoryItem(this.id)
    this.subcategory$ = this.subcategoryService.item$
    this.subcategoryService.getItemsBySubcategoryId(this.id)
    this.items$ = this.subcategoryService.itemsBySubcategory$
  }

}
