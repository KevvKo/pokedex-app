import { Injectable, ElementRef } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Observable, map, mergeMap, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService {

  constructor(pokemonService: PokemonService) { }

}
