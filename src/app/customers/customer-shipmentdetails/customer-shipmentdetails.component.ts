import { Component, OnInit } from '@angular/core';
import {Shipment} from '../../shared/models/shipment';
import {CustomerService} from '../../shared/services/customer.service';
import {ActivatedRoute} from '@angular/router';
import {formatDate} from '@angular/common';
import {Bid} from '../../shared/models/Bid';
import {ShipmentDto} from '../../shared/models/Dto/shipmentDto';

@Component({
  selector: 'app-customer-shipmentdetails',
  templateUrl: './customer-shipmentdetails.component.html',
  styleUrls: ['./customer-shipmentdetails.component.css']
})
export class CustomerShipmentdetailsComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
    this.shipmentDto = new ShipmentDto();
  }

  order: Shipment;
  bids: Bid[];
  shipmentDto: ShipmentDto;

  ngOnInit(): void {
    this.customerService.getOrderById(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe( order => {
        this.order = order;
        this.order.pickUpTime = formatDate(order.pickUpTime, 'dd/MM/yyyy', 'en-US');
        this.order.deliveryTime = formatDate(order.deliveryTime, 'dd/MM/yyyy', 'en-US');
      });
    this.customerService.getBidsByOrderId(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe( bids => {
      bids.forEach( b => {
        b.pickUpDate = formatDate(b.pickUpDate, 'dd/MM/yyyy', 'en-US');
        b.deliveryDate = formatDate(b.deliveryDate, 'dd/MM/yyyy', 'en-US');
      });
      this.bids = bids;
    });
  }

  onAccept(bid) {
    const shipment = this.order;
    this.shipmentDto.shipment = shipment;
    this.shipmentDto.bids = this.bids;
    this.shipmentDto.bid = bid;
    this.customerService.updateCustomerOrder(this.shipmentDto).subscribe();
  }

}
