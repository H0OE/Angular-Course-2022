import { BestosService } from './bestos.service';
import { Component } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular2022';

  rentalList: any[] = [];
  saleList: any[] = [];
  datos: any = [];

  saleBs = 0;
  saleUs = 0;
  rentBs = 0;
  rentUs = 0;
  sale: any = {
    USD: 0,
    BS: 0,
  };
  rental: any = {
    USD: 0,
    BS: 0,
  };

  constructor(private _service: BestosService) {
    this._service.getAllCars().subscribe((res) => {
      this.datos = res;

      Object.entries(this.datos)
        .filter(
          (c: any) =>
            c[1].status != 'enable' &&
            c[1].moneyType === 'BS' &&
            c[1].category === 'sale'
        )
        //@ts-ignore
        .forEach((c) => (this.saleBs = this.saleBs + c[1].price));

      Object.entries(this.datos)
        .filter(
          (c: any) =>
            c[1].status != 'enable' &&
            c[1].moneyType === 'USD' &&
            c[1].category === 'sale'
        )
        //@ts-ignore
        .forEach((c) => (this.saleUs = this.saleUs + c[1].price));

      Object.entries(this.datos)
        .filter(
          (c: any) =>
            c[1].status != 'enable' &&
            c[1].moneyType === 'BS' &&
            c[1].category === 'rental'
        )
        //@ts-ignore
        .forEach((c) => (this.rentBs = this.rentBs + c[1].price));

      Object.entries(this.datos)
        .filter(
          (c: any) =>
            c[1].status != 'enable' &&
            c[1].moneyType === 'USD' &&
            c[1].category === 'rental'
        )
        //@ts-ignore
        .forEach((c) => (this.rentUs = this.rentUs + c[1].price));
    });
  }

  ngOnInit() {
    this._service.getAllCars().subscribe((res) => {
      this.datos = res;

      Object.entries(this.datos)
        .filter((c: any) => c[1].category === 'rental')
        //@ts-ignore
        .forEach((c) => this.rentalList.push({ id: c[0], ...c[1] }));
      Object.entries(this.datos)
        .filter((c: any) => c[1].category === 'sale')
        //@ts-ignore
        .forEach((c) => this.saleList.push({ id: c[0], ...c[1] }));
    });
  }

  addBuyRent(e: { category: string; price: number; moneyType: string }) {
    if (e.category === 'rental') {
      this.rental[e.moneyType] = this.rental[e.moneyType] + e.price;
    }
    if (e.category === 'sale') {
      this.sale[e.moneyType] = this.sale[e.moneyType] + e.price;
    }
  }
}
