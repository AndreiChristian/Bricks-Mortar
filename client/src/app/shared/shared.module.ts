import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './UI/card/card.component';
import { MenuComponent } from './menu/menu.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsListComponent } from './items-list/items-list.component';
import { RaisedButtonComponent } from './UI/raised-button/raised-button.component';
import { StrokedButtonComponent } from './UI/stroked-button/stroked-button.component';
import { RaisedIconButtonComponent } from './UI/raised-icon-button/raised-icon-button.component';
import { StrokedIconButtonComponent } from './UI/stroked-icon-button/stroked-icon-button.component';
import { SectionHeaderComponent } from './UI/section-header/section-header.component';


@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    AboutComponent,
    CardComponent,
    MenuComponent,
    AutocompleteComponent,
    ItemsListComponent,
    RaisedButtonComponent,
    StrokedButtonComponent,
    RaisedIconButtonComponent,
    StrokedIconButtonComponent,
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    CardComponent,
    FooterComponent,
    ItemsListComponent,
    RaisedButtonComponent,
    StrokedButtonComponent,
    RaisedIconButtonComponent,
    StrokedIconButtonComponent
  ]
})
export class SharedModule { }
