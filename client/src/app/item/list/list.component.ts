import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Observable, Subscription } from 'rxjs';
import { CartItem, Item } from 'src/app/models/models';
import { CartService } from "../../cart/cart.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  list$: Observable<Item[]>
  subscription: Subscription
  loading$: Observable<boolean>

  constructor(private itemService: ItemService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.loading$ = this.itemService.loading$
    this.subscription = this.itemService.getCategoryList()
    this.list$ = this.itemService.list$

  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe()
  }

  addItemToCart(item: Item) {
    const newCartItem: CartItem = {
      quantity: 1,
      ...item
    }
    this.cartService.addItemToCart(newCartItem)
  }

}
