import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../services';
import { filter, Observable, Subscription } from 'rxjs';
import { OrderResponse } from '../../models';

@Component({
  selector: 'app-feature-success-order',
  templateUrl: './feature-success-order.component.html',
  styleUrls: ['./feature-success-order.component.scss'],
  host: {
    class: 'app-feature-success-order'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureSuccessOrderComponent implements OnInit, OnDestroy {
  private unsub!: Subscription;
  public success$: Observable<OrderResponse | null> = this.orderService.orderSuccess$

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.unsub = this.success$.pipe(
      filter(v => !v)
    )
      .subscribe(d => {
        this.router.navigate(['orders']).then()
      })
  }

  ngOnDestroy(): void {
    if(this.unsub) this.unsub.unsubscribe();
  }

  public newOrder(): void {
    this.orderService.clearOrder();
  }

}
