import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'orders'
  },
  {
    path: 'orders',
    loadChildren: () => import('../feature-modules/feature-products-module').then(m => m.FeatureProductsModule)
  },
  {
    path:'order-success',
    loadChildren:() => import('../feature-modules/feature-success-order').then(m => m.FeatureSuccessOrderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
