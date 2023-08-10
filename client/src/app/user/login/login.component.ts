import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading$: Observable<boolean>

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loading$ = this.authService.loading$
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { email, password } = form.value;
      this.authService.logIn(email, password)
    }
  }

}
