import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { Inv1Component } from './inv1/inv1.component';
import { Inv2Component } from './inv2/inv2.component';


@NgModule({
  declarations: [
    Inv1Component,
    Inv2Component
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
