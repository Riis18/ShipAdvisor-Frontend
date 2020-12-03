import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../models/customer';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';
import {Shipment} from '../models/shipment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }


  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.apiUrl + 'customer');
  }

  getCustomerByUid(uid: string): Observable<Customer> {
    return this.http.get<Customer>(environment.apiUrl + 'login/' + uid);
  }

  createCustomer(customer: Customer, password: string): Observable<Customer> {
    return this.http.post<Customer>(environment.apiUrl + 'login/createCustomer', {customer, password});
  }

  getCustomerShipments(uid: string): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(environment.apiUrl + 'shipment/' + uid);
  }

  createOrder(shipment: Shipment): Observable<Shipment> {
    return this.http.post<Shipment>(environment.apiUrl + 'shipment/createShipment', shipment);
  }

}


