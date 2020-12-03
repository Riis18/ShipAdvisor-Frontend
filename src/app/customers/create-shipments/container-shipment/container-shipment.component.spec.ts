import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerShipmentComponent } from './container-shipment.component';

describe('ContainerShipmentComponent', () => {
  let component: ContainerShipmentComponent;
  let fixture: ComponentFixture<ContainerShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerShipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
