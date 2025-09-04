import { Component } from "@angular/core"

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styles: 'h3{color:green}',
})


export class profileComponent {
  profileMessage = 'Profile works'

  profileButton() {
    alert('profile alert');
  }
}

