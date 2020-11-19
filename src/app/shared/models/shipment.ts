import {Customer} from './customer';
import {PackageList} from './packageList';

export class Shipment {
  id: number;
  biddingStatus: string;
  orderStatus: string;
  orderCreated: Date;
  customer: Customer[];
  packageList: PackageList[];
  shipmentType: string;
  shipmentSize: string;
  quantity: number;
  pickUpAddress: string;
  pickUpAddress2: string;
  pickUpCountry: string;
  pickUpCity: string;
  pickUpZipCode: number;
  pickUpTime: Date;
  deliveryAddress: string;
  deliveryAddress2: string;
  deliveryCountry: string;
  deliveryCity: string;
  deliveryZipCode: number;
  deliveryTime: Date;
}
