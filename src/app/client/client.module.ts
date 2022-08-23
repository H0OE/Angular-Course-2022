import { ProviderModule } from './../provider/provider.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { Client1Component } from './client1/client1.component';
import { Client2Component } from './client2/client2.component';


@NgModule({
  declarations: [
    Client1Component,
    Client2Component
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    ProviderModule
  ]
})
export class ClientModule { }
