import { Injectable } from '@angular/core';
import { Observable, combineLatest, switchMap, map, catchError, throwError  } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Pokemon, PokemonAPI, PokemonStats} from '../interfaces/interfaces'
@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private pokemonAPI = environment.pokemonListAPI;

  constructor(private http: HttpClient) {}

  mapToPokemon(pokemon: any): Pokemon {

    return {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      stats: this.mapToPokemonStatistics(pokemon),
      types: pokemon.types.map( (item: any) => item.type.name),
      abilities: pokemon.abilities.map((item: any) => item.ability.name),
      sprite: pokemon.sprites.front_default
    }
  }

  mapToPokemonStatistics(pokemon: any): PokemonStats {

    const { stats } = pokemon;

    return{
      hp: stats[0].base_stat,
      attack: stats[1].base_stat,
      defense: stats[2].base_stat,
      specialAttack: stats[3].base_stat,
      specialDefense: stats[4].base_stat,
      speed: stats[5].base_stat
    }
  }

  getPokemons(): Observable<Pokemon[]>{
    return this.http.get<PokemonAPI>(this.pokemonAPI)
      .pipe(
        switchMap( data => {
          return combineLatest( data.results.map( item => {
            return this.getPokemonDetails(item.url)
          }))
        }),
        catchError(this.handleError),
      )
  }
  
  getPokemonDetails(apiURL: string): Observable<Pokemon> {

    return this.http.get<any>(apiURL)
      .pipe(
        catchError(this.handleError),
        map( item => this.mapToPokemon(item))
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}