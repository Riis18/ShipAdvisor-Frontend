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


  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.apiUrl + 'customer');
  }



  async fetchUser() {
    const firebaseId = await this.getUserFromFB() as { uid: string; };

    const customer = new Customer();
    customer.uId = firebaseId.uid;
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


