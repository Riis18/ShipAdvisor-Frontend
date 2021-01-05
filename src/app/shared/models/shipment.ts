import {Customer} from './customer';
import {PackageList} from './packageList';
import {Bid} from './Bid';

export class Shipment {
  id: number;
  biddingStatus: string;
  orderStatus: string;
  orderCreated: string;
  customer: Customer;
  company: Customer;
  bids: Bid[];
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
