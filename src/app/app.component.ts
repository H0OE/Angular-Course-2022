import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2022';

  constructor(){
    const A = ['a', 'b', 'c', 'd', 'e'];
    const auxSplice = A.splice(1,1);
    console.log(A, auxSplice)
  }
}
