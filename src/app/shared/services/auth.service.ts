import { Injectable } from '@angular/core';
import {CustomerService} from './customer.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private customerService: CustomerService) { }

  private userLoggedIn = new BehaviorSubject(false);

  async isLoggedIn(): Promise<boolean> {
    await firebase.auth().onAuthStateChanged(user => {
      if (user){
        this.userLoggedIn.next(true);
      }else {
        this.userLoggedIn.next(false);
      }
    });
    return this.userLoggedIn.getValue();
  }

  getLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }
}
