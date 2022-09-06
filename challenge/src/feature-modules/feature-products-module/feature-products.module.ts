import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureProductsRoutingModule } from './feature-products-routing.module';
import { FeatureProductsComponent } from './feature-products.component';
import { OrderCardModule } from '../../ui-kit';



@NgModule({
  declarations: [
    FeatureProductsComponent,
  ],
  imports: [
    CommonModule,
    FeatureProductsRoutingModule,
    OrderCardModule
  ],
  exports:[
    FeatureProductsComponent
  ]
})
export class FeatureProductsModule { }
