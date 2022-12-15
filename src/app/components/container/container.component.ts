import { Component, ElementRef,AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '@pokemon-service/pokemon.service';
import { Pokemon } from 'src/app/interfaces/interfaces';
import { PokemonStore } from 'src/app/store/pokemon.store';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [PokemonStore]
})

export class ContainerComponent implements AfterViewInit, OnDestroy {

  private observer: IntersectionObserver;
  pokemons$ = this.pokemonStore.pokemons$

  @ViewChild('loading')
  loading: ElementRef | undefined;

  constructor ( private readonly pokemonStore: PokemonStore) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { 
        this.loadNextPokemons()}
    }, {
      threshold: 0.10
    });
    this.observer.observe(this.loading?.nativeElement)
  }
  ngOnDestroy(): void {
    this.observer.disconnect()
  }

  loadNextPokemons(): void {
    this.pokemonStore.getPokemons()
  }
}