import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './car/car.component';
import { CustomOverDirective } from './custom-over.directive';
import { CustomPricePipe } from './custom-price.pipe';

@NgModule({
  declarations: [AppComponent, CarComponent, CustomOverDirective, CustomPricePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
