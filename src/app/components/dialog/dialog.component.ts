import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

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
  @Input() open: boolean;
  @Input() onClose: Function;

  getClassByType(type: string): string {
    return this.typeColors[type];
  }
}
