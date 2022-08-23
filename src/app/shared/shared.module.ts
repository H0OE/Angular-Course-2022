import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { Shared1Component } from './shared1/shared1.component';
import { Shared2Directive } from './shared2.directive';
import { Shared3Pipe } from './shared3.pipe';


@NgModule({
  declarations: [
    Shared1Component,
    Shared2Directive,
    Shared3Pipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
