import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { RegisterComponent } from "./register/register.component"
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ProfileComponent } from './profile/profile.component';


const userRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }

]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
