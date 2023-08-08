import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/models/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user$: Observable<User>

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.authService.user$;
  }

}
