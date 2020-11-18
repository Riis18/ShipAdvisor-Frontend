import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../shared/services/customer.service';
import {UserService} from '../../shared/services/user.service';
import {Customer} from '../../shared/models/customer';

@Component({
  selector: 'app-dashboard-customer',
  templateUrl: './dashboard-customer.component.html',
  styleUrls: ['./dashboard-customer.component.css']
})
export class DashboardCustomerComponent implements OnInit {

  customer: Customer;

  constructor() { }

  ngOnInit(): void {
  }

}
