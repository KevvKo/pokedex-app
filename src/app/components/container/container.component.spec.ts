import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerComponent } from './container.component';
import { Pokemon } from 'src/app/interfaces/interfaces';
import { PokemonService } from'src/app/services/pokemon.service';
import { faker } from '@faker-js/faker';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  const fakePokemons: Pokemon[] = [
    {
      id: faker.datatype.number(10),
      name: faker.animal.type(),
      height: faker.datatype.number(),
      weight: faker.datatype.number(),
      stats: {
        hp: faker.datatype.number(),
        attack: faker.datatype.number(),
        defense: faker.datatype.number(),
        specialAttack: faker.datatype.number(),
        specialDefense: faker.datatype.number(),
        speed: faker.datatype.number()
      },
      types: ['flying', 'water'],
      abilities: [faker.random.word(), faker.random.word()],
      sprite: faker.image.imageUrl()
    },
    {
      id: faker.datatype.number(10),
      name: faker.animal.type(),
      height: faker.datatype.number(),
      weight: faker.datatype.number(),
      stats: {
        hp: faker.datatype.number(),
        attack: faker.datatype.number(),
        defense: faker.datatype.number(),
        specialAttack: faker.datatype.number(),
        specialDefense: faker.datatype.number(),
        speed: faker.datatype.number()
      },
      types: ['flying', 'water'],
      abilities: [faker.random.word(), faker.random.word()],
      sprite: faker.image.imageUrl()
    },
    {
      id: faker.datatype.number(10),
      name: faker.animal.type(),
      height: faker.datatype.number(),
      weight: faker.datatype.number(),
      stats: {
        hp: faker.datatype.number(),
        attack: faker.datatype.number(),
        defense: faker.datatype.number(),
        specialAttack: faker.datatype.number(),
        specialDefense: faker.datatype.number(),
        speed: faker.datatype.number()
      },
      types: ['flying', 'water'],
      abilities: [faker.random.word(), faker.random.word()],
      sprite: faker.image.imageUrl()
    },
    {
      id: faker.datatype.number(10),
      name: faker.animal.type(),
      height: faker.datatype.number(),
      weight: faker.datatype.number(),
      stats: {
        hp: faker.datatype.number(),
        attack: faker.datatype.number(),
        defense: faker.datatype.number(),
        specialAttack: faker.datatype.number(),
        specialDefense: faker.datatype.number(),
        speed: faker.datatype.number()
      },
      types: ['flying', 'water'],
      abilities: [faker.random.word(), faker.random.word()],
      sprite: faker.image.imageUrl()
    },
  ];

  const fakePokemonService = {
    pokemons(){
      return fakePokemons
    },

    loadPokemons(){

    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerComponent ],
      providers: [ PokemonService ]
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
