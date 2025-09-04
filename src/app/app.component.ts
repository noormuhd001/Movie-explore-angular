import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'Welcome'.toUpperCase();
  description: string = 'Testing variable';
  starkImage = '/stark.jpg';
  data1 = 40;
  data2 = 60;
  show = false;
  smartphone = ['samsung', 'IQOO', 'iphone', 'honor', 'oneplus'];
  bool = true;
  color = "red";

  handleButton() {
    this.description = "clicked button"
  }
}

