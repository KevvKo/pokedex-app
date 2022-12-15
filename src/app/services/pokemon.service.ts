import {Injectable} from '@angular/core';
import {catchError, combineLatest, map, Observable, switchMap, throwError,} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Pokemon, PokemonData, PokemonAPI, PokemonStats, Ability, Type } from '../interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private nextAPI: string = environment.pokemonListAPI;
  private previousAPI: string;

  constructor(private http: HttpClient) {}

  private mapToPokemon(pokemon: any): Pokemon {

    return {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      stats: this.mapToPokemonStatistics(pokemon),
      types: pokemon.types.map((item: Type) => item.type.name),
      abilities: pokemon.abilities.map((item: Ability) => item.ability.name),
      sprite: pokemon.sprites.front_default
    }
  }

  private mapToPokemonStatistics(pokemon: PokemonData): PokemonStats {

    const { stats } = pokemon;
    const [
      hp,
      attack,
      defense,
      specialAttack,
      specialDefense,
      speed
    ]: number[] = stats.map(({base_stat}: { base_stat: number }) => base_stat);

    return {
      hp,
      attack,
      defense,
      specialAttack,
      specialDefense,
      speed
    }
  }

  fetchPokemons(): Observable<Pokemon[]>{
    return this.http.get<PokemonAPI>(this.nextAPI)
      .pipe(
        switchMap( data => {
          this.nextAPI = data.next;
          this.previousAPI = data.previous;
          return combineLatest( data.results.map( item => {
            return this.getPokemonDetails(item.url)
          }))
        }),
        catchError(this.handleError),
      )
  }

  private getPokemonDetails(apiURL: string): Observable<Pokemon> {

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
