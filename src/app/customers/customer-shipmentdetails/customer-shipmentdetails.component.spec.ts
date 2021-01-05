import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerShipmentdetailsComponent } from './customer-shipmentdetails.component';

describe('CustomerShipmentdetailsComponent', () => {
  let component: CustomerShipmentdetailsComponent;
  let fixture: ComponentFixture<CustomerShipmentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerShipmentdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerShipmentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
