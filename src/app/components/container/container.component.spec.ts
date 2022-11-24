import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerComponent } from './container.component';
import { Pokemon } from 'src/app/interfaces/interfaces';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  const mockPokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Testmon',
      height: 123,
      weight: 456,
      stats: {
        hp: 789,
        attack: 0,
        defense: 11,
        specialAttack: 22,
        specialDefense: 33,
        speed: 44
      },
      types: ['flying', 'water'],
      abilities: ['testing', 'debugging'],
      sprite: '12345'
    },
    {
      id: 2,
      name: 'Testmon2',
      height: 123,
      weight: 456,
      stats: {
        hp: 789,
        attack: 0,
        defense: 11,
        specialAttack: 22,
        specialDefense: 33,
        speed: 44
      },
      types: ['dragon'],
      abilities: ['testing', 'debugging'],
      sprite: '12345'
    },
    {
      id: 3,
      name: 'Testmon3',
      height: 123,
      weight: 456,
      stats: {
        hp: 789,
        attack: 0,
        defense: 11,
        specialAttack: 22,
        specialDefense: 33,
        speed: 44
      },
      types: ['bug', 'fire'],
      abilities: ['testing', 'debugging'],
      sprite: '12345'
    }  
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerComponent ]
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
