import {Component, OnDestroy, OnInit} from '@angular/core';
import {CompanyService} from '../../shared/services/company.service';
import {Shipment} from '../../shared/models/shipment';
import {ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Customer} from '../../shared/models/customer';
import {Bid} from '../../shared/models/Bid';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-company-custorderdetail',
  templateUrl: './company-custorderdetail.component.html',
  styleUrls: ['./company-custorderdetail.component.css']
})
export class CompanyCustorderdetailComponent implements OnInit {

  createBidForm = this.fb.group({
    pickUpDate: new FormControl('', Validators.required),
    deliveryDate: new FormControl('', Validators.required),
    transportMethod: new FormControl('', Validators.required),
    transportPrice: new FormControl(+'', Validators.required),
    customPrice: new FormControl(+'', Validators.required),
    totalPrice: new FormControl(+'', Validators.required),
    bidInfo: this.fb.array([this.fb.group({companyInfo: ''})])
  });

  get pickUpDate(): any { return this.createBidForm.get('pickUpDate'); }
  get deliveryDate(): any { return this.createBidForm.get('deliveryDate'); }
  get transportMethod(): any { return this.createBidForm.get('transportMethod'); }
  get transportPrice(): any { return this.createBidForm.get('transportPrice'); }
  get customPrice(): any { return this.createBidForm.get('customPrice'); }
  get totalPrice(): any { return this.createBidForm.get('totalPrice'); }
  get bidInfo(): any { return this.createBidForm.get('bidInfo') as FormArray; }

  order: Shipment;

  constructor(private companyService: CompanyService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private userService: UserService) {

  }

  ngOnInit(): void {
    this.companyService.getOrderQuerieById(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe( order => {
        this.order = order;
      });
  }

  addInfo() {
    this.bidInfo.push(this.fb.group({companyInfo: ''}));
  }

  deleteInfo(index) {
    this.bidInfo.removeAt(index);
  }

  checkValidate(): boolean {
    if (!this.createBidForm.invalid) {
      return false;
    }
    return true;
  }

  onSubmit() {
    let bid: Bid;
    let date: Date;
    bid = this.createBidForm.value;
    date = this.pickUpDate.value;
    bid.pickUpDate = date.toJSON();
    date = this.deliveryDate.value;
    bid.deliveryDate = date.toJSON();
    bid.company = this.userService.getCurrentUser();
    bid.shipmentOrder = this.order;
    console.log(bid);
    this.companyService.createBid(bid).subscribe();
    this.createBidForm.reset();
  }

}
