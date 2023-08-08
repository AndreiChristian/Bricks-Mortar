import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';

const categoryRoutes: Routes = [
  { path: "", component: ListComponent },
  { path: ":id", component: ItemComponent }
]

@NgModule({
  declarations: [
    ContainerComponent,
    ListComponent,
    ItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(categoryRoutes)
  ]
})
export class CategoryModule { }
