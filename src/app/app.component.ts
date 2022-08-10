import { Component } from '@angular/core';
import { IPerson } from '../person/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2022';
  public person!: IPerson;

  getPrint(event:IPerson) {
    console.log('HI PARENT COMPONENT:', event)
    this.person = event;
  }
}
