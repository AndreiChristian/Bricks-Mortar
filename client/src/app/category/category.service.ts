import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../models/models';
import { HttpClient } from '@angular/common/http';


const categories: Category[] = [
  {
    categoryID: '1',
    name: 'Lumber & Boards',
    description: 'Quality wood and lumber of various sizes and types.',
    image: 'https://example.com/images/lumber.jpg' // Replace with a valid image URL
  },
  {
    categoryID: '2',
    name: 'Masonry',
    description: 'Bricks, blocks, stones, and more for your construction needs.',
    image: 'https://example.com/images/masonry.jpg' // Replace with a valid image URL
  }
];



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private CategoryListSubject = new BehaviorSubject<Category[]>(categories)
  public list$ = this.CategoryListSubject.asObservable()

  private CategoryItemSubject = new BehaviorSubject<Category>(null)
  public item$ = this.CategoryItemSubject.asObservable()

  constructor(private http:HttpClient) { }

  public getCategoryItem(id: string) {
    const searchedCategory = categories.find(c => c.categoryID === id)

    this.CategoryItemSubject.next(searchedCategory)
  }
}
