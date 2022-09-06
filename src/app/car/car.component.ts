import { BestosService } from './../bestos.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent {
  @Input() id!: string;
  @Input() category!: string;
  @Input() type!: string;
  @Input() colors!: string[];
  @Input() createDate!: string;
  @Input() price!: number;
  @Input() moneyType!: string;
  @Input() capacity!: number;
  @Input() timeType!: string;
  // @Input() showMessage!: boolean;

  @Output() buyRent = new EventEmitter();

  selectedColor: string = '';
  showMessage: boolean = false;
  showId: any = false;

  constructor(private _service: BestosService) {}

  onBuyRent(id: string) {
    this.showMessage = true;
    this.buyRent.emit({
      category: this.category,
      price: this.price,
      moneyType: this.moneyType,
    });
    this._service.updateCar(id, { status: 'disable' }).subscribe();
  }

  changeColor(color: string, id: string) {
    this.selectedColor = color;
    console.log(color, id);
    this._service.updateCar(id, { currentColor: color }).subscribe();
  }
}
