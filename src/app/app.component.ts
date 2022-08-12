import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular2022';
  showPersonDestroy: boolean = true;
  showPersonHide: boolean = true;

  onDestroyPerson() {
    console.log('onDestroyPerson');
    this.showPersonDestroy = false;
  }
  onHidePerson() {
    console.log('onHidePerson');
    this.showPersonHide = false;
  }
}
