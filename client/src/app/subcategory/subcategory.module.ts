import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const subcategoryRoutes: Routes = [
  { path: "", component: ListComponent },
  { path: ":id", component: ItemComponent }
]

@NgModule({
  declarations: [
    ContainerComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(subcategoryRoutes)
  ]
})
export class SubcategoryModule { }
