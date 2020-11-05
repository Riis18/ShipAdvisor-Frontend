import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';
import {Customer} from '../models/customer';
import {environment} from '../../../environments/environment';
import {CustomerService} from './customer.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private customerService: CustomerService,
              private router: Router) { }


  async signIn(email: string, password: string){
    await firebase.auth().signInWithEmailAndPassword(email, password).then(async data => {
      await this.customerService.fetchUser().then(() => {
        this.router.navigateByUrl('/dashboard');
      });
    }).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
  }

  async createUserFB(customer: Customer) {
    await firebase.auth().createUserWithEmailAndPassword(customer.email, customer.password).catch(error => {

    });
    await this.customerService.fetchUser().then(() => {
      customer.uId = this.customerService.user.getValue().uId;
      this.customerService.createCustomer(customer).subscribe(() => {
        this.router.navigateByUrl('/dashboard');
      });
    });
  }

  signOut() {
    firebase.auth().signOut().then(u => {
      this.router.navigateByUrl('/login');
    }).catch(error => {

    });
  }
}
