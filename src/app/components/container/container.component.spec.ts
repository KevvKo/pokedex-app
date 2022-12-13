import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerComponent } from './container.component';
import { PokemonService } from '@pokemon-service/pokemon.service';
import { of } from 'rxjs';
import { FakePokemons } from '../../mocks/mockData';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  const fakePokemonService:
    Pick<PokemonService, keyof PokemonService> = {
      pokemons: of(FakePokemons),
      loadPokemons: jest.fn(() => of(FakePokemons) )
    }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerComponent ],
      providers: [
         { provide: PokemonService, useValue: fakePokemonService }
        ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
