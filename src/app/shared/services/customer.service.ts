import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../models/customer';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public user = new BehaviorSubject<Customer>(null);
  authLoaded = false;
  is


  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.apiUrl + 'customer');
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(environment.apiUrl + 'login/addcustomer', customer);
  }

  async fetchUser() {
    const firebaseId = await this.getUserFromFB() as { uid: string; };

    const customer = new Customer();
    if (firebaseId === null || firebaseId === undefined) {
      this.user.next(null);
      return;
    }
    this.user.next(customer);
  }

  getUserFromFB() {
    return new Promise( resolve => {
      firebase.auth().onAuthStateChanged( user => {
        resolve(user);
      });
    });
  }

}


