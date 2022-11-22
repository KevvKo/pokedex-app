import { Component, Input } from '@angular/core';
import { Pokemon } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})

export class PokemonDetailComponent {

  open: boolean = false;
  selectedPokemon: Pokemon;

  @Input() pokemon: Pokemon;

  handleClick(pokemon: Pokemon): void{
    this.selectedPokemon = pokemon;
    this.toggleDialog()
  }

  toggleDialog(): void {
    this.open = !this.open
  }
}
