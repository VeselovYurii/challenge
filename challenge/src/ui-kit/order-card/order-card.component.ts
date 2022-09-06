import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { Order, Product } from '../../models';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
  host: {
    class: 'app-order-card'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderCardComponent {
  @Input() order!: Order;
  @Output() counterChange = new EventEmitter();

  public countChange(order: Order, $event: any) {
    this.counterChange.emit({ order, count: $event.value })
  }

}
