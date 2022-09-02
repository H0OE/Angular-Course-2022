import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string = environment.app.apiUrlBase;

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<any> {
    return this.http.get(`${this.url}/products.json`);
  }
}
