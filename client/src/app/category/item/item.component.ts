import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: string;
  category$: Observable<Category>;

  constructor(private router: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id")
    this.categoryService.getCategoryItem(this.id)
    this.category$ = this.categoryService.item$
  }

}
