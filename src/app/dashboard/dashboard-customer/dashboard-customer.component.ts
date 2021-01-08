import { Component, OnInit } from '@angular/core';
import {Customer} from '../../shared/models/customer';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-dashboard-customer',
  templateUrl: './dashboard-customer.component.html',
  styleUrls: ['./dashboard-customer.component.css']
})
export class DashboardCustomerComponent implements OnInit {

  customer: Customer;

  constructor(private userService: UserService) {
    this.customer = this.userService.getCurrentUser();
  }

  ngOnInit(): void {
  }

}
