import { Component, inject, OnInit } from '@angular/core';
import { ChuckNorrisJoke, Dadjoke } from 'src/app/shared/interfaces/jokes';
import { JokesService } from 'src/app/shared/services/jokes.service';
import {MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit{
  jokeService = inject(JokesService)
  dadJoke =''
  chuckNorrisJoke = ''

  ngOnInit(): void {
    this.refreshDadJoke()
    this. refreshChuckNorrisJoke()
  }

  refreshDadJoke() {
    this.jokeService.getDadJoke().subscribe((data: Dadjoke) => {
      this.dadJoke = data.joke
    })
  }
  
  refreshChuckNorrisJoke() {
    this.jokeService.getChuckNorrisJoke().subscribe((data : ChuckNorrisJoke) => {
      this.chuckNorrisJoke = data.value
    })
  }

}
