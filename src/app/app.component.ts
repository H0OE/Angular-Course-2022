import { Component } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular2022';

  public data$ = of('Hello World');

  constructor() {
    this.data$.pipe(map((res) => res + ' -map')).subscribe((res) => {
      console.log(res);
    });
  }
}
