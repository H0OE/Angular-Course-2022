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

  carsToShow: Car[] = []
  
  color: string[] = ['','','','','','','','','','','','']

  constructor() {}

  ngOnInit(): void {
    if (this.type === 'nuevo') {
      this.carsToShow = this.saleCars
    } else {
     this.carsToShow = this.rentCars 
    }
  }

  selectColor(index: number, color:string) {
  }
}
