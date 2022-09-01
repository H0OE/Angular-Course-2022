import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';


@NgModule({
  declarations: [
    B1Component,
    B2Component
  ],
  imports: [
    CommonModule,
    BuyRoutingModule
  ]
})
export class BuyModule { }
