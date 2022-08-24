import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { View1Component } from './dashboard/view1/view1.component';
import { View2Component } from './dashboard/view2/view2.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    View1Component,
    View2Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
