import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  data = 10;
  count = signal(1);
  number = <string | number>1;
  effectNum = signal(1);

  update(val: string) {
    if (val == 'desc') {
      this.count.set(this.count() - 1)
    } else {
      this.count.set(this.count() + 1)
    }
  }

  updateNumber() {
    this.number = "Out of Stock"
  }

  updateEffectNum() {
    this.effectNum.update(val => val + 1);
  }

  constructor() {
    effect(() => {
      console.log('effectNum is:', this.effectNum());
    });
  }

}
