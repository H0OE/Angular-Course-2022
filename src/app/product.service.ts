import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string = environment.app.apiUrlBase;

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<any> {
    return this.http.get(`${this.url}/products.json`).pipe(
      map((s) => Object.entries(s)),
      map((s) => s.map((s) => ({ id: s[0], ...s[1] })))
    );
  }

  public createProduct(body: any): Observable<any> {
    return this.http.post(`${this.url}/products.json`, body);
  }
}
