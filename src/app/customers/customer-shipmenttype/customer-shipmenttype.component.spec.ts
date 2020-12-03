import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerShipmenttypeComponent } from './customer-shipmenttype.component';

describe('CustomerShipmenttypeComponent', () => {
  let component: CustomerShipmenttypeComponent;
  let fixture: ComponentFixture<CustomerShipmenttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerShipmenttypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerShipmenttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
