import { Component, OnInit } from '@angular/core';
import { SingletonService } from 'src/app/singleton.service';

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.scss'],
})
export class B1Component implements OnInit {
  token = '';

  constructor(private _singleton_service: SingletonService) {}

  ngOnInit(): void {}

  async receive() {
    this.token = await this._singleton_service.getToken();
  }
}
