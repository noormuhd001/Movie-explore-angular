import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dicevalue: number = 0;

  updateDice() {
    this.dicevalue = Math.floor(Math.random() * 6) + 1;
  }
}
