import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "auth", loadChildren: () => import("./user/user.module").then(m => m.UserModule) },
  { path: "categories", loadChildren: () => import("./category/category.module").then(m => m.CategoryModule) },
  { path: "items", loadChildren: () => import("./item/item.module").then(m => m.ItemModule) },
  { path: "cart", loadChildren: () => import("./cart/cart.module").then(m => m.CartModule) },
  { path: "order", loadChildren: () => import("./order/order.module").then(m => m.OrderModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
