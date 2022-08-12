import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked {
  @Input() name: string = '';

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
}
