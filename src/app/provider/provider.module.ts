import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { Provider1Component } from './provider1/provider1.component';
import { Provider2Component } from './provider2/provider2.component';
import { ProviderComponent } from './provider/provider.component';


@NgModule({
  declarations: [
    Provider1Component,
    Provider2Component,
    ProviderComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ]
})
export class ProviderModule { }
