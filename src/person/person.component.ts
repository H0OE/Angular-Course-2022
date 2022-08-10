import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPerson } from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() name = '';
  @Input() job = '';

  @Output() print = new EventEmitter<IPerson>();
  constructor() {}

  ngOnInit() {}

  onPrint():void {
    this.print.emit({
      name: this.name,
      job: this.job,
    });
  }
}
