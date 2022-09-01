import { SingletonService } from './../../../singleton.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inv1',
  templateUrl: './inv1.component.html',
  styleUrls: ['./inv1.component.scss'],
})
export class Inv1Component implements OnInit {
  message = '';

  constructor(private _singleton_service: SingletonService) {}

  ngOnInit(): void {
    // this.message = this._singleton_service.getName();
  }

  receive() {
    this.message = this._singleton_service.getName();
  }
}
