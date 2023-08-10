import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, map } from 'rxjs';
import { User } from '../models/models';
import { LocalStorageService } from "./local-storage.service"
import { HttpClient } from '@angular/common/http';
import { apiURL } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userKey = "userKey"

  private LoadingSubject = new BehaviorSubject<boolean>(false)
  public loading$: Observable<boolean> = this.LoadingSubject.asObservable()

  private UserSubject = new BehaviorSubject<User>(this.localStorageService.get<User>(this.userKey) || null);
  public user$: Observable<User> = this.UserSubject.asObservable();

  constructor(private localStorageService: LocalStorageService, private http: HttpClient, private _snackBar: MatSnackBar) { }

  public isLoggedIn(): Observable<boolean> {

    return this.UserSubject.pipe(map(
      user => !!user
    ))

  }

  public logIn(email: string, password: string): Subscription {
    this.LoadingSubject.next(true)
    return this.http.post<User>(`${apiURL}/auth/login`, { email, password }).subscribe(
      {
        next: (user: User) => {
          if (user) {
            console.log("Hello ")
            this.localStorageService.set(this.userKey, user)
            this.UserSubject.next(user)
            this.LoadingSubject.next(false)
          }
        },
        error: (err) => {
          this._snackBar.open(err)
          this.LoadingSubject.next(false)
        },
      }
    )
  }



  public logout() {
    this.localStorageService.delete(this.userKey)
    this.UserSubject.next(null)
  }

  register(user: User): Subscription {
    this.LoadingSubject.next(true)
    return this.http.post<User>(`${apiURL}/auth/register`, user).subscribe(
      {
        next: (user: User) => {
          if (user) {
            this.localStorageService.set(this.userKey, user)
            this.UserSubject.next(user)
            this.LoadingSubject.next(false)
          }
        },
        error: (err) => {
          this._snackBar.open(err)
          this.LoadingSubject.next(false)
        },
      }
    )
  }

}
