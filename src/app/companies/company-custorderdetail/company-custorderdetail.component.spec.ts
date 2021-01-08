import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCustorderdetailComponent } from './company-custorderdetail.component';

describe('CompanyCustorderdetailComponent', () => {
  let component: CompanyCustorderdetailComponent;
  let fixture: ComponentFixture<CompanyCustorderdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCustorderdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCustorderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
