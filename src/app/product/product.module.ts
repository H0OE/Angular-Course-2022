import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { Product2Component } from './product2/product2.component';
import { Product1Component } from './product1/product1.component';


@NgModule({
  declarations: [
    Product2Component,
    Product1Component
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
