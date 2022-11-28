import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerComponent } from './container.component';
import { PokemonService } from 'src/app/services/pokemon.service';
import { of } from 'rxjs';
import { FakePokemons } from 'src/app/mocks/mockData';

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
        ]
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
