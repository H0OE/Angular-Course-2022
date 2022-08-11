import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  @Input() name!: string;

  constructor() {
    console.log('testConstructor');
  }

  ngOnInit(): void {
    console.log('testOnInit');
  }

  ngOnChanges(): void {
    console.log('testOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }
}
