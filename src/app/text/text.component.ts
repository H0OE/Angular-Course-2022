import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  @Input() word: string = 'Hola';
  wordArray: string[] = this.word.split('');

  constructor() {}

  ngOnInit(): void {}

  public trackItem(index: number, letter: any) {
    return letter.trackId;
  }
}
