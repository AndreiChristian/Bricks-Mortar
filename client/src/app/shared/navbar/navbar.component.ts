import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable, map, shareReplay } from 'rxjs';
import { storeName } from 'src/app/constants/constants';
import { AuthService } from "../../core/auth.service"
import { User } from 'src/app/models/models';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartCount: Observable<number>

  storeName = storeName;
  @Input() drawer: MatDrawer;

  isLoggedIn$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn()
    this.user$ = this.authService.user$;
    this.cartCount = this.cartService.getNumberOfItemsInCart()
  }

  // angular material injected, for detecting changes in viewport size
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );



}
