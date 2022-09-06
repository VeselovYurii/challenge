import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderService, ProductsService } from '../../services';
import { filter, Observable, Subject, takeUntil } from 'rxjs';
import { Order, OrderResponse, Product } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-products',
  templateUrl: './feature-products.component.html',
  styleUrls: ['./feature-products.component.scss'],
  host: {
    class: 'app-feature-products'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureProductsComponent implements OnInit, OnDestroy {
  private unsub = new Subject<null>();
  public productList$: Observable<Product[]> = this.productService.productList$;
  public orderList$: Observable<Order[]> = this.orderService.orderList$;
  public amountOrder$: Observable<number> = this.orderService.amountOrder$;
  public successOrder$: Observable<OrderResponse | null> = this.orderService.orderSuccess$;

  constructor(
    private productService: ProductsService,
    private orderService: OrderService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.productService.getListProduct();
    this.productList$.pipe(
      takeUntil(this.unsub)
    )
      .subscribe(products => this.orderService.createOrders(products))

    this.successOrder$.pipe(
      filter(v => !!v),
      takeUntil(this.unsub),
    ).subscribe(() =>
      this.router.navigate(['order-success']).then()
    )
  }

  ngOnDestroy(): void {
    this.unsub.next(null);
    this.unsub.complete();
  }

  public countChange($event: any) {
    this.orderService.changeOrder($event.order, Number($event.count));
  }

  public confirmOrder(): void {
    this.orderService.saveOrder();
  }

}
