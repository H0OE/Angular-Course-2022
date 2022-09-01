import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { Hom1Component } from './hom1/hom1.component';
import { Hom2Component } from './hom2/hom2.component';


@NgModule({
  declarations: [
    Hom1Component,
    Hom2Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
