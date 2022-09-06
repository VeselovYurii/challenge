import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeatureSuccessOrderComponent } from './feature-success-order.component';


const routes: Routes = [
  {
    path:'',
    component: FeatureSuccessOrderComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class FeatureSuccessOrderRoutingModule { }
