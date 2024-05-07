import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(-1)" class="btn btn-success">-1</button>
    <button (click)="resetCounter()" class="btn btn-success mx-2">Reset</button>
    <button (click)="increaseBy(+1)" class="btn btn-success">+1</button>
  `,
})
export class CounterComponent {
  constructor() {}
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
