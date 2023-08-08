import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';



@NgModule({
  declarations: [
    ContainerComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubcategoryModule { }
