import { SharedModule } from './../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { Product2Component } from './product2/product2.component';
import { Product1Component } from './product1/product1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: '', redirectTo: 'product1', pathMatch: 'full' },
      { path: 'product1', component: Product1Component },
      { path: 'product2', component: Product2Component },
      {
        path: 'shared',
        loadChildren: () =>
          import('../shared/shared.module').then((m) => m.SharedModule),
        data: { preload: true },
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
