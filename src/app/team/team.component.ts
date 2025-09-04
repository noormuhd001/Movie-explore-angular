import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [NgFor],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teams = [
    { id: 1, name: 'Brazil' },
    { id: 2, name: 'Portugal' },
    { id: 3, name: 'Argentina' },
    { id: 4, name: 'France' }
  ];

}
