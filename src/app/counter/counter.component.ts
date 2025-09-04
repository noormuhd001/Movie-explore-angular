import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  number = 0;
  decrement() {
    this.number--;
  }

  increment() {
    this.number++;
  }

  reset() {
    this.number = 0;
  }
}
