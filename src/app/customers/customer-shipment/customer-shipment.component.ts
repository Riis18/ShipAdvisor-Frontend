import { Component, OnInit } from '@angular/core';
import {Shipment} from '../../shared/models/shipment';
import {CustomerService} from '../../shared/services/customer.service';
import {Customer} from '../../shared/models/customer';
import {UserService} from '../../shared/services/user.service';
import {formatDate} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-shipment',
  templateUrl: './customer-shipment.component.html',
  styleUrls: ['./customer-shipment.component.css']
})
export class CustomerShipmentComponent implements OnInit {

  displayedColumns: string[] = ['status', 'shipmentType', 'created', 'pickUpDate', 'deliveryDate'];
  shipment: Shipment[];
  customer: Customer;


  constructor(private userService: UserService,
              private customerService: CustomerService,
              private router: Router) {
    this.customer = this.userService.getCurrentUser();

  }

  ngOnInit(): void {
    this.customerService.getCustomerShipments(this.customer.uId).subscribe( shipments => {
      shipments.forEach( s => {
        s.orderCreated = formatDate(s.orderCreated, 'dd/MM/yyyy', 'en-US');
        s.pickUpTime = formatDate(s.pickUpTime, 'dd/MM/yyyy', 'en-US');
        s.deliveryTime = formatDate(s.deliveryTime, 'dd/MM/yyyy', 'en-US');
      });
      this.shipment = shipments;
    });
  }

  onClick(id) {
    this.router.navigateByUrl('/shipment/' + id);
  }

}
