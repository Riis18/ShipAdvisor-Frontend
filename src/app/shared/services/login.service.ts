import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';
import {Customer} from '../models/customer';
import {environment} from '../../../environments/environment';
import {CustomerService} from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private customerService: CustomerService) { }


  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(environment.apiUrl + 'login/addcustomer', customer);
  }

  signIn(email: string, password: string): any {
    firebase.auth().signInWithEmailAndPassword(email, password).then( data => {
      console.log('User signed in', email, data);
    }).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
  }
}
