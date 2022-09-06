import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BestosService {
  private url: string = environment.app.apiUrlBase;

  constructor(private http: HttpClient) {}

  public getAllCars(): Observable<any> {
    return this.http.get(`${this.url}/cars.json`).pipe(
      map((s) => Object.entries(s)),
      map((s) => s.map((s) => ({ id: s[0], ...s[1] })))
    );
  }
  public getCar(id: any): Observable<any> {
    return this.http.get(`${this.url}/cars/${id}.json`);
  }

  public createProduct(body: any): Observable<any> {
    return this.http.post(`${this.url}/cars.json`, body);
  }

  public deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.url}/cars/${id}.json`);
  }

  public updateCar(id: any, body: any): Observable<any> {
    return this.http.patch(`${this.url}/cars/${id}.json`, body);
  }
}
