import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  color: string = "";
  name = "xxxx";

  handleColor(val: string) {
    this.color = val;
  }
  changeColor(event: Event) {
    this.color = (event?.target as HTMLInputElement).value
  }

  getName(val: string) {
    this.name = val;
  }


  teams = [
    { name: 'Kerala Blasters', goals: 32, position: 4 },
    { name: 'Mohan Bagan', goals: 67, position: 2 },
    { name: 'Jamshedpur', goals: 45, position: 1 },
    { name: 'Chennayin', goals: 30, position: 3 },
  ]

  international = ['Brazil', 'Argentina', 'France', 'Spain', 'Germany'];

  input: string = "dsd";
  changeName(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.input = val;
  }
}

