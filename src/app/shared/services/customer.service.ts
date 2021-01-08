import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../models/customer';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Shipment} from '../models/shipment';
import {Bid} from '../models/Bid';
import {ShipmentDto} from '../models/Dto/shipmentDto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }


  /**
   * makes get request to retrieve a costumer
   * @param uid id of user
   */
  getCustomerByUid(uid: string): Observable<Customer> {
    return this.http.get<Customer>(environment.apiUrl + 'login/' + uid);
  }

  /**
   * makes a post request to create a customer
   * @param customer to be created
   * @param password to be used for firebase creation
   */
  createCustomer(customer: Customer, password: string): Observable<Customer> {
    return this.http.post<Customer>(environment.apiUrl + 'login/createCustomer', {customer, password});
  }

  /**
   * makes a get request to retrieve all customer orders
   * @param uid id of user
   */
  getCustomerShipments(uid: string): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(environment.apiUrl + 'shipment/' + uid);
  }

  /**
   * makes a post request to create a new order
   * @param shipment to be created
   */
  createOrder(shipment: Shipment): Observable<Shipment> {
    return this.http.post<Shipment>(environment.apiUrl + 'shipment/createShipment', shipment);
  }

  /**
   * makes a get request to retrieve selected order
   * @param id id of order
   */
  getOrderById(id: number): Observable<Shipment> {
    return this.http.get<Shipment>(environment.apiUrl + 'shipment/order/' + id);
  }

  /**
   * Makes a get request to retrieve a list of bids
   * @param id of order
   */
  getBidsByOrderId(id: number): Observable<Bid[]> {
    return this.http.get<Bid[]>(environment.apiUrl + 'customer/bid/' + id);
  }

  /**
   * Makes a put request to update selected order
   * @param shipmentDto contains data of multiple data entities
   */
  updateCustomerOrder(shipmentDto: ShipmentDto): Observable<ShipmentDto> {
    return this.http.put<ShipmentDto>(environment.apiUrl + 'customer/updateShipment', shipmentDto);
  }

}


