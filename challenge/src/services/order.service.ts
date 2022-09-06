import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { Dictionary, Order, OrderResponse } from '../models';

@Injectable()

export class OrderService {
  private orderDictionary: Dictionary<Order> = {};
  public orderList: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);
  public orderList$: Observable<Order[]> = this.orderList.asObservable();
  public amountOrder: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public amountOrder$: Observable<number> = this.amountOrder.asObservable();
  public orderSuccess: BehaviorSubject<OrderResponse | null> = new BehaviorSubject<OrderResponse | null>(null)
  public orderSuccess$: Observable<OrderResponse | null> = this.orderSuccess.asObservable();

  constructor(
    private apiService: ApiService
  ) {
  }

  public createOrders(products: Order[]): void {
    this.orderDictionary = {};
    this.amountOrder.next(0);
    products.forEach((product) => this.productToOrderAdapter(product));
    this.setOrderList();
  }

  private setOrderList(): void{
    this.orderList.next(this.getListFromDictionary());
  }

  private getListFromDictionary(): Order[] {
    return Object.keys(this.orderDictionary).map((key: string) => this.orderDictionary[key])
  }

  public getOrderByName(name: string): Order {
    return this.orderDictionary[name];
  }

  public clearOrder(): void {
    this.orderSuccess.next(null);
  }


  public saveOrder(): void {
    const orders: Order[] = []
    this.apiService.post<OrderResponse, { orders: Order[] }>('/order', { orders })
      .pipe(
        catchError(this.apiService.handleRequestError),
        tap((response) => this.orderSuccess.next(response))
      )
      .subscribe();
  }

  public changeOrder(order: Order, count: number): void {
    const { name, price } = order;
    const amountWithoutDiscount = count * price;
    const discount = amountWithoutDiscount > 50 ? 10 : 0;
    const amount = Number((amountWithoutDiscount - amountWithoutDiscount * discount / 100).toFixed(2));
    const orderSettings = {
      count,
      amount,
    }
    if (this.orderDictionary[name]) {
      this.orderDictionary[name] = {
        ...this.orderDictionary[name],
        discount,
        ...orderSettings
      }
    } else {
      this.orderDictionary[name] = {
        ...order,
        ...orderSettings
      }
    }
    const sum = Object.keys(this.orderDictionary).reduce((acc, key) => acc + <number>this.orderDictionary[key].amount, 0);
    this.setOrderList();
    this.amountOrder.next(sum)
  }

  private productToOrderAdapter(product: Order) {
    this.orderDictionary[product.name] = {
      ...product,
      count: 0,
      amount: 0,
      discount: 0
    }
  }
}
