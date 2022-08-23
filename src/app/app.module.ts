import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImpurePipe } from './impure.pipe';
import { PurePipe } from './puree.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImpurePipe,
    PurePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
