import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

class Types {
  value: string;
}

@Component({
  selector: 'app-container-shipment',
  templateUrl: './container-shipment.component.html',
  styleUrls: ['./container-shipment.component.css']
})
export class ContainerShipmentComponent implements OnInit {

  types: Types[] = [
    {value: '20 fods'},
    {value: '40 fods'}
  ];

  createContainerForm = this.fb.group({
    shipmentType: new FormControl('Container'),
    shipmentSize: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    pickUpAddress: new FormControl('', Validators.required),
    pickUpAddress2: new FormControl(''),
    pickUpCity: new FormControl('', Validators.required),
    pickUpCountry: new FormControl('', Validators.required),
    pickUpZipCode: new FormControl('', Validators.required),
    pickUpTime: new FormControl('', Validators.required),
    deliveryAddress: new FormControl('', Validators.required),
    deliveryAddress2: new FormControl(''),
    deliveryCity: new FormControl('', Validators.required),
    deliveryCountry: new FormControl('', Validators.required),
    deliveryZipCode: new FormControl('', Validators.required),
    deliveryTime: new FormControl('', Validators.required),
    packageList: this.fb.array([this.fb.group({item: '', quantity: ''})])
  });
  get shipmentType(): any { return this.createContainerForm.get('shipmentType'); }
  get shipmentSize(): any { return this.createContainerForm.get('shipmentSize'); }
  get quantity(): any { return this.createContainerForm.get('quantity'); }
  get pickUpAddress(): any { return this.createContainerForm.get('pickUpAddress'); }
  get pickUpAddress2(): any { return this.createContainerForm.get('pickUpAddress2'); }
  get pickUpCity(): any { return this.createContainerForm.get('pickUpCity'); }
  get pickUpCountry(): any { return this.createContainerForm.get('pickUpCountry'); }
  get pickUpZipCode(): any { return this.createContainerForm.get('pickUpZipCode'); }
  get pickUpTime(): any { return this.createContainerForm.get('pickUpTime'); }
  get deliveryAddress(): any { return this.createContainerForm.get('deliveryAddress'); }
  get deliveryAddress2(): any { return this.createContainerForm.get('deliveryAddress2'); }
  get deliveryCity(): any { return this.createContainerForm.get('deliveryCity'); }
  get deliveryCountry(): any { return this.createContainerForm.get('deliveryCountry'); }
  get deliveryZipCode(): any { return this.createContainerForm.get('deliveryZipCode'); }
  get deliveryTime(): any { return this.createContainerForm.get('deliveryTime'); }
  get packageList(): any { return this.createContainerForm.get('packageList') as FormArray; }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
