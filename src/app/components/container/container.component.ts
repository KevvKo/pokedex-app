import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '@pokemon-service/pokemon.service';
import { Pokemon } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {

  private throttleTimer: boolean = false;
  isLoading: boolean = true
  pokemons$ : Observable<Pokemon[]> = this.pokemonService.pokemons

  constructor (private pokemonService: PokemonService) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleInfiniteScroll.bind(this))
  }

  handleInfiniteScroll(): void {

    const throttleTime = 1000;
    const distanceToPagBottom = 180;

    this.throttle(() => {
      const endOfPage = 
        window.innerHeight + window.scrollY >= document.body.offsetHeight - distanceToPagBottom;
      
        if(endOfPage) this.loadNextPokemons();

    }, throttleTime)
  }

  loadNextPokemons(): void {
    this.pokemonService.loadPokemons()
  }

  throttle(callback: () => void, time: number): void {
    
    if(this.throttleTimer) return;

    this.throttleTimer = true;

    setTimeout(() => {
      callback();
      this.throttleTimer = false
    }, time)
  }

}