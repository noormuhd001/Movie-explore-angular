import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
  display: boolean = true;
  displayDiv = true;
  hide() {
    this.display = false;
  }
  show() {
    this.display = true;

  }
  toggle() {
    this.display = !this.display
  }

  toggleDiv() {
    this.displayDiv = !this.displayDiv
  }
}
