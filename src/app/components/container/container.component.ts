import { Component, ElementRef,AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { StoreFacadeService } from '@pokemon-service/store-facade.service';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [StoreFacadeService]
})

export class ContainerComponent implements AfterViewInit, OnDestroy {

  private observer: IntersectionObserver;
  pokemons$ = this.facadeService.pokemons$

  @ViewChild('loading')
  loading: ElementRef | undefined;

  constructor ( private readonly facadeService: StoreFacadeService) {}

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
    this.facadeService.getPokemons()
  }
}