import { data } from './../data';
import { Component, Input, OnInit } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss'],
})
export class ListCarsComponent implements OnInit {
  @Input() type: string = '';
  dataCars = JSON.parse(JSON.stringify(data.data));
  auxValues: Car[] = Object.values(this.dataCars);
  auxKeys = Object.keys(this.dataCars);
  saleCars: Car[] = this.auxValues.filter(
    (element) => element.category === 'sale'
  );
  rentCars: Car[] = this.auxValues.filter(
    (element) => element.category === 'rental'
  );

  carsToShow: Car[] = [];
  montoDolares = 0;
  montoBs = 0;

  color: string[] = ['', '', '', '', '', '', '', '', '', '', '', ''];
  btnName = '';

  constructor() {}

  ngOnInit(): void {
    if (this.type === 'nuevo') {
      this.carsToShow = this.saleCars;
      this.btnName = 'Buy';
    } else {
      this.carsToShow = this.rentCars;
      this.btnName = 'Rent';
    }

    let auxD = this.carsToShow.filter((e) => e.moneyType === 'USD');
    this.montoDolares = auxD.reduce(
      (sum, value) =>
        typeof value.price == 'number' ? sum + value.price : sum,
      0
    );
    let auxB = this.carsToShow.filter((e) => e.moneyType === 'BS');
    this.montoBs = auxB.reduce(
      (sum, value) =>
        typeof value.price == 'number' ? sum + value.price : sum,
      0
    );
  }

  selectColor(id: string, color: string) {
    document.getElementById(id)!.style.backgroundColor = color;
  }
}
