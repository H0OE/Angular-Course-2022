import { SingletonService } from './../../../singleton.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash1',
  templateUrl: './dash1.component.html',
  styleUrls: ['./dash1.component.scss'],
})
export class Dash1Component implements OnInit {
  message = '';
  savedMessage = '';

  constructor(private _singleton_service: SingletonService) {}

  ngOnInit(): void {}

  sent() {
    this._singleton_service.setName(this.message);
    this.savedMessage = this._singleton_service.getName();
  }
}
