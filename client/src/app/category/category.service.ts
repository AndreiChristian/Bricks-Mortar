import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Category, Item } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { apiURL } from "../../environments/environment"
import { MatSnackBar } from '@angular/material/snack-bar';

// const categories: Category[] = [
//   {
//     categoryID: '1',
//     name: 'Lumber & Boards',
//     description: 'Quality wood and lumber of various sizes and types.',
//     image: 'https://example.com/images/lumber.jpg' // Replace with a valid image URL
//   },
//   {
//     categoryID: '2',
//     name: 'Masonry',
//     description: 'Bricks, blocks, stones, and more for your construction needs.',
//     image: 'https://example.com/images/masonry.jpg' // Replace with a valid image URL
//   }
// ];

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private ItemCategoryList = new BehaviorSubject<Item[]>([])
  public itemsByCategory$ = this.ItemCategoryList.asObservable()

  private CategoryListSubject = new BehaviorSubject<Category[]>([])
  public list$: Observable<Category[]> = this.CategoryListSubject.asObservable()

  private LoadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.LoadingSubject.asObservable()

  private CategoryItemSubject = new BehaviorSubject<Category>(null)
  public item$: Observable<Category> = this.CategoryItemSubject.asObservable()

  constructor(private http: HttpClient, private _matSnackbar: MatSnackBar) { }

  public getCategoryList(): Subscription {
    this.LoadingSubject.next(true)
    return this.http.get<Category[]>(`${apiURL}/categories`).subscribe(
      {
        next: value => {
          if (value) {
            console.log(value)
            this.CategoryListSubject.next(value);
            this.LoadingSubject.next(false);
          }
        },
        error: err => {
          console.error(err);
          this._matSnackbar.open(err)
          this.LoadingSubject.next(false);
        },
      }
    )

  }

  public getCategoryItem(id: string): Subscription {
    this.LoadingSubject.next(true)
    return this.http.get<Category[]>(`${apiURL}/categories/${id}`).subscribe(
      {
        next: value => {
          if (value) {
            console.log(value)
            this.CategoryItemSubject.next(value[0]);
            this.LoadingSubject.next(false);
          }
        },
        error: err => {
          console.error(err);
          this.LoadingSubject.next(false);
          this._matSnackbar.open(err)
        },
      }
    )

  }
  public getItemsByCategoryId(id: string): Subscription {
    this.LoadingSubject.next(true)
    return this.http.get<Item[]>(`${apiURL}/items/category/${id}`).subscribe(
      {
        next: value => {
          if (value) {
            console.log(value)
            this.ItemCategoryList.next(value);
            this.LoadingSubject.next(false);
          }
        },
        error: err => {
          console.error(err);
          this.LoadingSubject.next(false);
          this._matSnackbar.open(err)
        },
      }
    )

  }
}
