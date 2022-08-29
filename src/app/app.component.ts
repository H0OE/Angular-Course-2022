import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular2022';
  simpleContent = 'S';
  overlap = true;
  disabled = true;
  constructor(test: TestService) {
    console.log(test.getName());
  }
}
