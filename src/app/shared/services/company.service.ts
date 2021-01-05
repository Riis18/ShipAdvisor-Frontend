import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shipment} from '../models/shipment';
import {Customer} from '../models/customer';
import {environment} from '../../../environments/environment';
import {Bid} from '../models/Bid';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  orders: Shipment;

  constructor(private http: HttpClient) { }

  getAllOrderQueries(id: string): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(environment.apiUrl + 'shipment/' + id + '/queries');
  }

  getOrderQuerieById(id: number): Observable<Shipment> {
    return this.http.get<Shipment>(environment.apiUrl + 'shipment/queries/' + id);
  }

  createBid(bid: Bid): Observable<Bid> {
    return this.http.post<Bid>(environment.apiUrl + 'shipment/createBid', bid);
  }

  createOrder(shipment: Shipment): Observable<Shipment> {
    return this.http.post<Shipment>(environment.apiUrl + 'shipment/createShipment', shipment);
  }
}
