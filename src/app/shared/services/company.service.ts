import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shipment} from '../models/shipment';
import {environment} from '../../../environments/environment';
import {Bid} from '../models/Bid';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  orders: Shipment;

  constructor(private http: HttpClient) { }

  /**
   * makes a get request to retrieve all orders not bid on
   * @param id of customer
   */
  getAllOrderQueries(id: string): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(environment.apiUrl + 'shipment/' + id + '/queries');
  }

  /**
   * makes a get request for the selected order
   * @param id of order
   */
  getOrderQuerieById(id: number): Observable<Shipment> {
    return this.http.get<Shipment>(environment.apiUrl + 'shipment/queries/' + id);
  }

  /**
   * Makes a post request to create a bid
   * @param bid to be created
   */
  createBid(bid: Bid): Observable<Bid> {
    return this.http.post<Bid>(environment.apiUrl + 'shipment/createBid', bid);
  }

  /**
   * Makes a post request to create a order
   * @param shipment to be created
   */
  createOrder(shipment: Shipment): Observable<Shipment> {
    return this.http.post<Shipment>(environment.apiUrl + 'shipment/createShipment', shipment);
  }
}
