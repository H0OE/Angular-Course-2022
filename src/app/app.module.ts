import { Home2Component } from './home/home2/home2.component';
import { Home1Component } from './home/home1/home1.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, HomeComponent, Home1Component, Home2Component],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
