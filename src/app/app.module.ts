import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ButtonComponent,
    InputComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
