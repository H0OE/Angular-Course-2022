import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() name = '';
  @Input() job = '';

  @Output() print=new EventEmitter()
  constructor() {}

  ngOnInit() {}

  onPrint(event:any){
    console.log(this.name)
  }
}
