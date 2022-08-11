import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular2022';
  inputChangeName: string = '';
  name: string = 'Pepe Pelota';

  changeName() {
    this.name = this.inputChangeName;
  }


}
