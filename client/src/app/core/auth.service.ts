import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models/models';
import { LocalStorageService } from "./local-storage.service"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userKey = "userKey"

  private UserSubject = new BehaviorSubject<User>(this.localStorageService.get<User>(this.userKey) || null);
  public user$: Observable<User> = this.UserSubject.asObservable();

  constructor(private localStorageService: LocalStorageService) { }

  public isLoggedIn(): Observable<boolean> {

    return this.UserSubject.pipe(map(
      user => !!user
    ))

  }

  public logIn(user: User): void {
    this.localStorageService.set(this.userKey, user)
    this.UserSubject.next(user)
  }

  public register(user: User): void {
    this.localStorageService.set(this.userKey, user)
    this.UserSubject.next(user)
  }

  public logout() {
    this.localStorageService.delete(this.userKey)
    this.UserSubject.next(null)
  }

}
