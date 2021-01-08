import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  private userLoggedIn = new BehaviorSubject(false);

  /**
   * Checks to see if the user is logged in
   */
  async isLoggedIn(): Promise<boolean> {
    await firebase.auth().onAuthStateChanged(user => {
      if (user && this.userService.getCurrentUser()){
        this.userLoggedIn.next(true);
      }else {
        this.userLoggedIn.next(false);
      }
    });
    return this.userLoggedIn.getValue();
  }

  /**
   * gets the user that is logged in
   */
  getLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }
}
