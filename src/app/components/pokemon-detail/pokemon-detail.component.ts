import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})

export class PokemonDetailComponent {
  @Input() pokemonName: string | '';
  @Input() pokemonAPI: string | '';
}
