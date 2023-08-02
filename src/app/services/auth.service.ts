import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuthinticated() {
    let role = localStorage.getItem('role');
    if (role) {
      return true;
    } else {
      return false;

    }
  }
}
