import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  imports: [NgFor],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  players = [
    { id: 1, name: 'Neymar Jr' },
    { id: 2, name: 'Leo Messi' },
    { id: 3, name: 'Cristiano Ronaldo' },
    { id: 4, name: 'Kylian Mbappe' },
    { id: 5, name: 'Toni Kroos' },
    { id: 6, name: 'Lamine Yamal' },
    { id: 7, name: 'Musiala' },
    { id: 8, name: 'Ousmane Dembele' },
    { id: 9, name: 'Erling Haaland' },
  ];

  trackById(index: number, player: any): number {
    return player.id;
  }
}
