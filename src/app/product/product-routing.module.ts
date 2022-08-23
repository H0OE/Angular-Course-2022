import { SharedComponent } from './../shared/shared/shared.component';
import { Product2Component } from './product2/product2.component';
import { Product1Component } from './product1/product1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'product1', component: Product1Component },
  { path: 'product2', component: Product2Component },
  {path: 'shared', component: SharedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
