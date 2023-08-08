import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/models/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { first_name, last_name, email, password } = form.value;
      const newUser: User = {
        first_name,
        last_name,
        email,
        password
      }
      this.authService.logIn(newUser)
      this.router.navigate(['/'])
    }
  }

}
