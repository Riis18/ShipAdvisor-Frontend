import {Customer} from './customer';
import {Shipment} from './shipment';
import {BidInfo} from './bidInfo';

export class Bid {
  id: number;
  pickUpDate: string;
  deliveryDate: string;
  company: Customer;
  shipmentOrder: Shipment;
  transportMethod: string;
  transportPrice: number;
  customPrice: number;
  totalPrice: number;
  bidInfo: BidInfo[];
}
