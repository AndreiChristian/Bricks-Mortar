import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';

const itemRoutes: Routes = [
  { path: "", component: ListComponent }
]

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(itemRoutes),
    MaterialModule
  ]
})
export class ItemModule { }
