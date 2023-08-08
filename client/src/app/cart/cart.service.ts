import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CartItem, Item } from '../models/models';
import { LocalStorageService } from '../core/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartKey = "cart_local_storage_key";

  private CartSubject = new BehaviorSubject<CartItem[]>(this.localStorageService.get<CartItem[]>(this.cartKey) || [])
  public cart$: Observable<CartItem[]> = this.CartSubject.asObservable()

  constructor(private localStorageService: LocalStorageService) { }

  getNumberOfItemsInCart(): Observable<number> {
    return this.CartSubject.pipe(
      map(
        c => c.reduce((total, currentItem) => total + currentItem.quantity, 0)
      )
    )
  }

  addItemToCart(item: Item) {
    const existingItems = this.CartSubject.getValue();
    const hasItem = existingItems.find(i => i.itemID === item.itemID);

    let newItems: CartItem[];

    if (hasItem) {
      hasItem.quantity += 1;
      newItems = existingItems;
    } else {
      newItems = [...existingItems, { ...item, quantity: 1 }];
    }

    this.CartSubject.next(newItems);
    this.localStorageService.set(this.cartKey, newItems);

  }

  decrementItemQuantity(itemId: string) {
    const existingItems = this.CartSubject.getValue();
    const itemToDecrement = existingItems.find(i => i.itemID === itemId);

    if (itemToDecrement.quantity > 1) {
      itemToDecrement.quantity -= 1;
    } else {
      const index = existingItems.indexOf(itemToDecrement);
      existingItems.splice(index, 1);
    }

    this.CartSubject.next(existingItems);
    this.localStorageService.set(this.cartKey, existingItems);
  }

  removeItemFromCart(itemId: string) {
    const existingItems = this.CartSubject.getValue();
    const itemToRemove = existingItems.find(i => i.itemID === itemId);

    if (!itemToRemove) return;

    const index = existingItems.indexOf(itemToRemove);
    existingItems.splice(index, 1);

    this.CartSubject.next(existingItems);
    this.localStorageService.set(this.cartKey, existingItems);
  }



}
