import {Customer} from './customer';
import {PackageList} from './packageList';

export class Shipment {
  id: number;
  biddingStatus: string;
  orderStatus: string;
  orderCreated: string;
  customers: Customer[];
  packageLists: PackageList[];
  shipmentType: string;
  shipmentSize: string;
  quantity: number;
  pickUpAddress: string;
  pickUpAddress2: string;
  pickUpCountry: string;
  pickUpCity: string;
  pickUpZipCode: number;
  pickUpTime: string;
  deliveryAddress: string;
  deliveryAddress2: string;
  deliveryCountry: string;
  deliveryCity: string;
  deliveryZipCode: number;
  deliveryTime: string;
}
