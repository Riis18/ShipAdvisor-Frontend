import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';
import {CompanyService} from '../../shared/services/company.service';
import {Shipment} from '../../shared/models/shipment';

@Component({
  selector: 'app-company-custorderlist',
  templateUrl: './company-custorderlist.component.html',
  styleUrls: ['./company-custorderlist.component.css']
})
export class CompanyCustorderlistComponent implements OnInit {

  orders: Shipment[];

  constructor(private companyService: CompanyService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.companyService.getAllOrderQueries(this.userService.getCurrentUser().uId)
      .subscribe( orders => {
        this.orders = orders;
      });
  }

  onClick(id) {
    this.router.navigateByUrl('/queries/' + id);
  }

}
