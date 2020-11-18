import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {CustomerService} from '../../shared/services/customer.service';
import {Customer} from '../../shared/models/customer';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  customer: Customer;

  constructor(private loginService: UserService,
              private customerService: CustomerService,
              private userService: UserService) {

    this.customer = this.userService.getCurrentUser();
  }

  ngOnInit(): void {
  }

  signOut() {
    this.loginService.signOut();
  }

}
