import { TestBed } from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { environment } from '../environments/environment';
import { FakePokemons } from 'src/app/mocks/mockData';
import { Pokemon } from 'pokenode-ts';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpController: HttpTestingController;
  let url: string = environment.pokemonListAPI;
  let pokemons = FakePokemons;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [PokemonService]
    });
    service = TestBed.inject(PokemonService);
    httpController = TestBed.inject(HttpTestingController);
  }); 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map the correct values to pokemon statistics', () =>  {

  })
});
