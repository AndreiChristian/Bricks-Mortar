import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/models/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {

  loading$: Observable<boolean>

  subscription: Subscription

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loading$ = this.authService.loading$
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { first_name, last_name, email, password } = form.value;
      const newUser: User = {
        first_name,
        last_name,
        email,
        password
      }
      console.log(newUser)
      this.authService.register(newUser)
      // this.authService.logIn(newUser)
      // this.router.navigate(['/'])
    }
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe()
  }

}
