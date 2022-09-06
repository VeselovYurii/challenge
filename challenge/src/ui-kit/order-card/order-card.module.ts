import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from './order-card.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrderCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
  ],
  exports: [
    OrderCardComponent
  ]
})
export class OrderCardModule {
}
