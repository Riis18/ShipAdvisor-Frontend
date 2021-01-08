import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';
import {Customer} from '../models/customer';
import {CustomerService} from './customer.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private customerService: CustomerService,
              private router: Router) {}

  /**
   * Logs the user in with firebase
   * After gets the user logged in from customerservice
    * @param email for user
   * @param password for user
   */
  async signIn(email: string, password: string){
    await firebase.auth().signInWithEmailAndPassword(email, password).then(async data => {
      await this.customerService.getCustomerByUid(data.user.uid).subscribe( user => {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigateByUrl('/dashboard');
        });
    }).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
  }

  /**
   * Gets the current user logged in
   */
  getCurrentUser(): Customer {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  /**
   * Sends the user to customerservice to be created
   * @param customer to be created
   */
  async createUserFB(customer: Customer) {
    await this.customerService.createCustomer(customer, customer.password).subscribe(() => {
      this.signIn(customer.email, customer.password);
    });
  }

  /**
   * Signs the user in with firebase and clear the localstorage of information
   */
  signOut() {
    firebase.auth().signOut().then(u => {
      this.router.navigateByUrl('/login');
      localStorage.clear();
    }).catch(error => {

    });
  }
}
