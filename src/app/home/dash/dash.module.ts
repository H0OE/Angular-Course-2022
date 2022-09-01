import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { Dash1Component } from './dash1/dash1.component';
import { Dash2Component } from './dash2/dash2.component';


@NgModule({
  declarations: [
    Dash1Component,
    Dash2Component
  ],
  imports: [
    CommonModule,
    DashRoutingModule
  ]
})
export class DashModule { }
