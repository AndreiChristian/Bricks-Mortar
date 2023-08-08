import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { email, password } = form.value;
      console.log('User:', email, 'Password:', password);
    }
  }

}
