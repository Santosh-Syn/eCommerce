import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  users: User[] = [];

  currentUser: User | null = null;
  showUserForm$ = new BehaviorSubject<boolean>(false);

  login (user: User){
    this.currentUser = user;
    this.showUserForm$.next(false);
  }

  logout() {
    this.currentUser = null;
  }

  isAdmin(): boolean {
    if(this.currentUser?.role === 'admin') {
      return true;
    } else {
      return false;
    }
  }


  isSeller(): boolean {
    if (this.currentUser?.role === 'seller') {
      return true;
    } else {
      return false;
    }
  }

  isCustomer(): boolean {
    if (this.currentUser?.role === 'customer') {
      return true;
    } else {
      return false;
    }
  }

}
