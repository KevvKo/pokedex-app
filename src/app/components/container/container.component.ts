import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon, PokemonAPI} from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {

  pokemons$ : Observable<Pokemon[]> = this.pokemonService.getPokemons()
  pokemons: Pokemon[];
  pokemonData: PokemonAPI;
  nextList: String = '';

  constructor (private pokemonService: PokemonService) {}

  ngOnInit(): void {
  }
}
