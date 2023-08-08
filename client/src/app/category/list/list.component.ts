import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../category.service"
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list$: Observable<Category[]>

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.list$ = this.categoryService.list$;
  }


}
