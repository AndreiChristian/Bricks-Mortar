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


@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    AboutComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    CardComponent
  ]
})
export class SharedModule { }
