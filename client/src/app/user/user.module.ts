import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { RegisterComponent } from "./register/register.component"
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ProfileComponent } from './profile/profile.component';
import { CustomFormModule } from '../form/form.module';
import { SharedModule } from '../shared/shared.module';


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
    RouterModule.forChild(userRoutes),
    CustomFormModule,
    SharedModule
  ]
})
export class UserModule { }
