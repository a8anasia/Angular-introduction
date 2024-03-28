import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Athanasia'

  person = {
    givenName: 'Athanasia',
    surName: 'Sidera',
    age: 26,
    email: 'sidera.ath@gmail.com'
  }
}

