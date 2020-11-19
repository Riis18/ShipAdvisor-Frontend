import { Component, OnInit } from '@angular/core';
import {Shipment} from '../../shared/models/shipment';
import {CustomerService} from '../../shared/services/customer.service';
import {Customer} from '../../shared/models/customer';
import {UserService} from '../../shared/services/user.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-customer-shipment',
  templateUrl: './customer-shipment.component.html',
  styleUrls: ['./customer-shipment.component.css']
})
export class CustomerShipmentComponent implements OnInit {

  displayedColumns: string[] = ['status', 'shipmentType', 'created', 'pickUpDate', 'deliveryDate'];
  shipment: Shipment[];
  customer: Customer;

  dataSource;



  constructor(private userService: UserService,
              private customerService: CustomerService) {
    this.customer = this.userService.getCurrentUser();

  }

  ngOnInit(): void {
    this.customerService.getCustomerShipments(this.customer.uId).subscribe( shipments => {
      this.shipment = shipments;
      console.log(this.shipment);
      this.dataSource = new MatTableDataSource(this.shipment);
    });
  }

}
