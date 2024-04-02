import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Athanasia'

  person0 = {
    givenName: 'Athanasia',
    surName: 'Sidera',
    age: 100,
    email: 'sidera.ath@gmail.com',
    address: "Athens, Greece"
  }
  
  person1 = {
    givenName: 'John',
    surName: 'Doe',
    age: 100,
    email: 'doe.john@gmail.com',
    address: "New York, USA"
  }
}
