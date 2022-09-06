import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureSuccessOrderComponent } from './feature-success-order.component';
import { FeatureSuccessOrderRoutingModule } from './feature-success-order-routing.module';
import { MsToMinutesPipe } from '../../pipes';


@NgModule({
  declarations: [
    FeatureSuccessOrderComponent,
    MsToMinutesPipe
  ],
  imports: [
    CommonModule,
    FeatureSuccessOrderRoutingModule
  ],
  exports:[
    FeatureSuccessOrderComponent
  ]
})
export class FeatureSuccessOrderModule { }
