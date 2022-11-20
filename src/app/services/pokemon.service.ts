import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';

export interface Pokemon {
  name: string;
  api: string;
}

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private pokemonListUrl = environment.pokemonListAPI;
  
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.pokemonListUrl)
  }

  getPokemon(apiURL: string): Observable<any> {
    return this.http.get<any>(apiURL);
  }

}
