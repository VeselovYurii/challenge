import { Product } from './product';

export interface OrderResponse {
  success: true;
  deliveryTime: number
}


export interface Order extends Product {
  amount?: number,
  count?: number;
  discount?: number;
}
