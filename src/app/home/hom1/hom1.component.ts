import { SingletonService } from './../../singleton.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hom1',
  templateUrl: './hom1.component.html',
  styleUrls: ['./hom1.component.scss'],
})
export class Hom1Component implements OnInit {
  token = '';
  savedToken = '';

  constructor(private _singleton_service: SingletonService) {}

  ngOnInit(): void {}

  sent() {
    this._singleton_service.setToken(this.token);
    this.savedToken = this._singleton_service.getToken();
  }
}
