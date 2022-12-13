import { Component, ElementRef, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '@pokemon-service/pokemon.service';
import { Pokemon } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit, AfterViewInit, OnDestroy {

  private observer: IntersectionObserver;
  pokemons$ : Observable<Pokemon[]> = this.pokemonService.pokemons

  @ViewChild('loading')
  loading: ElementRef;

  constructor (private pokemonService: PokemonService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { this.loadNextPokemons()}
    }, {
      threshold: 0.10
    });
    this.observer.observe(this.loading.nativeElement)
  }
  ngOnDestroy(): void {
    this.observer.disconnect()
  }

  loadNextPokemons(): void {
    this.pokemonService.loadPokemons()
  }
}