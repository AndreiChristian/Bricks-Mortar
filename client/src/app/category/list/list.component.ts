import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from "../category.service"
import { Observable, Subscription } from 'rxjs';
import { Category } from 'src/app/models/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  list$: Observable<Category[]>
  subscription: Subscription;
  loading$: Observable<boolean>

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.loading$ = this.categoryService.loading$;
    this.subscription = this.categoryService.getCategoryList()
    this.list$ = this.categoryService.list$;
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe()
  }

}
