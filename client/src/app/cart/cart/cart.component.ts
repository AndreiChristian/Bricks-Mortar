import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem, Item } from 'src/app/models/models';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems$: Observable<CartItem[]>

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems$ = this.cartService.cart$;
  }

  addOneToCart(cartItem: CartItem) {
    this.cartService.addItemToCart(cartItem)
  }

  decrementOneFromCart(itemId: string) {
    this.cartService.decrementItemQuantity(itemId)
  }

  removeFromCart(itemId: string) {
    this.cartService.removeItemFromCart(itemId)
  }

}
