import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {

  pokemons: Pokemon [];
  nextList: String = '';

  constructor (private pokemonService: PokemonService) {}

  ngOnInit(): void {

    this.pokemonService
      .getData()
      .subscribe( data => {
        this.pokemons = data.results
        this.nextList = data.next
      })
  }

}
