import {Shipment} from '../shipment';
import {Bid} from '../Bid';

export class ShipmentDto {
  shipment: Shipment;
  bids: Bid[];
  bid: Bid;
}
