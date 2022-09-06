import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FeatureProductsComponent } from './feature-products.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureProductsComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})

export class FeatureProductsRoutingModule {
}
