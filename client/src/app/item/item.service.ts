import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Item } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { apiURL } from "../../environments/environment"
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private ItemListSubject = new BehaviorSubject<Item[]>([])
  public list$: Observable<Item[]> = this.ItemListSubject.asObservable()

  private LoadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.LoadingSubject.asObservable()

  private CategoryItemSubject = new BehaviorSubject<Item>(null)
  public item$: Observable<Item> = this.CategoryItemSubject.asObservable()

  constructor(private http: HttpClient, private _matSnackbar: MatSnackBar) { }

  public getCategoryList(): Subscription {
    this.LoadingSubject.next(true)
    return this.http.get<Item[]>(`${apiURL}/items`).subscribe(
      {
        next: value => {
          if (value) {
            console.log(value)
            this.ItemListSubject.next(value);
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
    return this.http.get<Item>(`${apiURL}/items/${id}`).subscribe(
      {
        next: value => {
          if (value) {
            console.log(value)
            this.CategoryItemSubject.next(value);
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
