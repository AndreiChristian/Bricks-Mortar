import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

const cartRoutes: Routes = [
  { path: "", component: CartComponent }
]

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoutes),
    MaterialModule,
    SharedModule
  ]
})
export class CartModule { }
