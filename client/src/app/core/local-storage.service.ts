import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  get<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key))
  }

  delete(key: string) {
    localStorage.removeItem(key)
  }

}
