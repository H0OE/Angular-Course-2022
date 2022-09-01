import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SingletonService {
  private message!: string;
  private token!: string;

  constructor() {}
  getName() {
    console.log('getMsg', this.message);
    return this.message;
  }

  setName(message: string) {
    this.message = message;
    console.log('setMsg', this.message);
  }

  getToken() {
    console.log('getToken', this.token);
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
    console.log('setToken', this.token);
  }
}
