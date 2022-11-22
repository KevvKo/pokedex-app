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
  typeColors: {[key: string]: string} = {
    bug: 'bg-lime-500',
    dark: 'bg-slate-900 text-slate-50',
    dragon: 'bg-orange-400',
    fairy: 'bg-emerald-500',
    fighting: 'bg-orange-200',
    fire: 'bg-orange-600',
    flying: 'bg-red-200',
    ghost: 'bg-zinc-400',
    grass: 'bg-green-700 text-slate-50',
    ground: 'bg-yellow-900 text-slate-50',
    ice: 'bg-sky-400',
    normal: 'bg-neutral-300',
    rock: 'bg-stone-500',
    poison: 'bg-purple-900 text-slate-50',
    psychic: 'bg-violet-900 text-slate-50',
    shadow: 'bg-slate-800 text-slate-50',
    steel: 'bg-slate-400',
    unknown: 'bg-neutral-800 text-slate-50',
    water: 'bg-blue-600 text-slate-50'
  }

  @Input() pokemon: Pokemon;

  handleClick(pokemon: Pokemon): void{
    this.selectedPokemon = pokemon;
    this.toggleDialog()
  }

  toggleDialog(): void {
    this.open = !this.open
  }

  getClassByType(type: string): string {
    return this.typeColors[type];
  }
}
