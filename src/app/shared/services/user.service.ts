import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';
import {Customer} from '../models/customer';
import {environment} from '../../../environments/environment';
import {CustomerService} from './customer.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private customerService: CustomerService,
              private router: Router) { }

  public user = new BehaviorSubject<Customer>(null);

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

  getCurrentUser(): Customer {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  async createUserFB(customer: Customer) {
    await this.customerService.createCustomer(customer, customer.password).subscribe(() => {
      this.signIn(customer.email, customer.password);
    });
  }

  signOut() {
    firebase.auth().signOut().then(u => {
      this.router.navigateByUrl('/login');
      localStorage.clear();
    }).catch(error => {

    });
  }
}
