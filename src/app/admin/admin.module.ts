import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { Ad1Component } from './ad1/ad1.component';
import { Ad2Component } from './ad2/ad2.component';


@NgModule({
  declarations: [
    Ad1Component,
    Ad2Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
