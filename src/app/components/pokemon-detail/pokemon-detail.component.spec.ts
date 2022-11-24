import { ComponentFixture, waitForAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { Pokemon } from 'src/app/interfaces/interfaces';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  const mockPokemon: Pokemon = {
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
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    component.pokemon = mockPokemon;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Selection', () => {
    it('should project and display the pokemon name', () => {
      expect(
        fixture.debugElement.query(By.css('h2')).nativeElement.innerHTML
        ).toContain('Testmon');
    });
    it('should project and display the pokemon name', () => {
      expect(
        fixture.debugElement.query(By.css('h2')).nativeElement.innerHTML
        ).toContain('Testmon');
    });
    it('should contain correct image alt value', () => {
      expect(
        fixture.debugElement.query(By.css('img')).nativeElement?.getAttribute('alt')
      ).toContain(mockPokemon.name);
    });
    it('should contain correct image soure value', () => {
      expect(
        fixture.debugElement.query(By.css('img')).nativeElement?.getAttribute('src')
      ).toContain(mockPokemon.sprite);
    });
    it('should open the modal', waitForAsync(() => {
      fixture
        .debugElement.query(By.css('section'))
        .triggerEventHandler('click', null)

      fixture.whenStable().then(() => {
        fixture.detectChanges()
        expect(
          fixture.debugElement.query(By.css('.pokemon-detail-modal')).nativeElement
        ).toBeTruthy();
      })
    }))
  })

  describe('Modal', () => {   
    it('should contain correct image alt value', () => {
      component.open = true
      component.selectedPokemon = mockPokemon
      fixture.detectChanges();

      expect(
        fixture.debugElement.query(By.css('[aria-label="modal-pokemon-image"]')).nativeElement?.getAttribute('alt')
      ).toContain(mockPokemon.name);
    });
    it('should contain correct image soure value', () => {
      component.open = true
      component.selectedPokemon = mockPokemon
      fixture.detectChanges();

      expect(
        fixture.debugElement.query(By.css('[aria-label="modal-pokemon-image"]')).nativeElement?.getAttribute('src')
      ).toContain(mockPokemon.sprite);
    });
    it('should project and display the pokemon name', () => {
      component.open = true
      component.selectedPokemon = mockPokemon
      fixture.detectChanges();

      expect(
        fixture.debugElement.query(By.css('.pokemon-detail-modal h2'))?.nativeElement.innerHTML
      ).toContain('Testmon');
    })

    it('should project and display the types', () => {
      component.open = true
      component.selectedPokemon = mockPokemon
      fixture.detectChanges();

      const types = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal .types span'));

      expect(types[0].nativeElement.innerHTML).toContain(mockPokemon.types[0]);
      expect(types[1].nativeElement.innerHTML).toContain(mockPokemon.types[1]);

    })

    it('should project and display the belonging color for a type', () => {
      component.open = true
      component.selectedPokemon = mockPokemon
      fixture.detectChanges();

      const types = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal .types span'));

      expect(types[0].classes['bg-red-200']).toBeTruthy()
      expect(types[1].classes['bg-blue-600']).toBeTruthy()
    })

    it('should project and display the size', () => {
      component.open = true
      component.selectedPokemon = mockPokemon
      fixture.detectChanges();

      expect(
        fixture.debugElement.queryAll(By.css('.pokemon-detail-modal .body-stats span'))[0]?.nativeElement.innerHTML
      ).toContain(mockPokemon.height.toString());
    })

    it('should project and display the weight', () => {
      component.open = true
      component.selectedPokemon = mockPokemon
      fixture.detectChanges();

      expect(
        fixture.debugElement.queryAll(By.css('.pokemon-detail-modal .body-stats span'))[2]?.nativeElement.innerHTML
      ).toContain(mockPokemon.weight.toString());
    })

    describe('statistic items', () => {
      it('should project and display the hp value', () => {
        component.open = true
        component.selectedPokemon = mockPokemon
        fixture.detectChanges();

        const statisticElement = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal [aria-label="pokemon-statistic-item"'))[0]
        
        expect(
          statisticElement.query(By.css('span.text-right')).nativeElement.innerHTML
        ).toContain(mockPokemon.stats.hp.toString());
      })

      it('should project and display the attack value', () => {
        component.open = true
        component.selectedPokemon = mockPokemon
        fixture.detectChanges();

        const statisticElement = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal [aria-label="pokemon-statistic-item"'))[1]
         
        expect(
          statisticElement.query(By.css('span.text-right')).nativeElement.innerHTML
        ).toContain(mockPokemon.stats.attack.toString());
      })

      it('should project and display the defense value', () => {
        component.open = true
        component.selectedPokemon = mockPokemon
        fixture.detectChanges();

        const statisticElement = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal [aria-label="pokemon-statistic-item"'))[2]
        
        expect(
          statisticElement.query(By.css('span.text-right')).nativeElement.innerHTML
        ).toContain(mockPokemon.stats.defense.toString());
      })

      it('should project and display the special attack value', () => {
        component.open = true
        component.selectedPokemon = mockPokemon
        fixture.detectChanges();
        
        const statisticElement = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal [aria-label="pokemon-statistic-item"'))[3]
        
        expect(
          statisticElement.query(By.css('span.text-right')).nativeElement.innerHTML
        ).toContain(mockPokemon.stats.specialAttack.toString());
      })

      it('should project and display the special defense value', () => {
        component.open = true
        component.selectedPokemon = mockPokemon
        fixture.detectChanges();

        const statisticElement = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal [aria-label="pokemon-statistic-item"'))[4]
        
        expect(
          statisticElement.query(By.css('span.text-right')).nativeElement.innerHTML
        ).toContain(mockPokemon.stats.specialDefense.toString());
      })

      it('should project and display the speed', () => {
        component.open = true
        component.selectedPokemon = mockPokemon
        fixture.detectChanges();

        const statisticElement = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal [aria-label="pokemon-statistic-item"'))[5]
        
        expect(
          statisticElement.query(By.css('span.text-right')).nativeElement.innerHTML
        ).toContain(mockPokemon.stats.speed.toString());
      })
    })

    it('should close the modal', waitForAsync(() => {
      component.open = true
      component.selectedPokemon = mockPokemon
      fixture.detectChanges();

      fixture
      .debugElement.query(By.css('[aria-label="close-button"'))
      .triggerEventHandler('click', null)

    fixture.whenStable().then(() => {
      fixture.detectChanges()
      expect(
        fixture.debugElement.query(By.css('.pokemon-detail-modal'))
      ).toBeNull();
    })
    }))
  })
});
