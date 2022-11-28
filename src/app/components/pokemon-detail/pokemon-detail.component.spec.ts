import { ComponentFixture, waitForAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { Pokemon } from 'src/app/interfaces/interfaces';
import { faker } from '@faker-js/faker';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  const fakePokemon: Pokemon = {
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
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    component.pokemon = fakePokemon;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Selection', () => {
    it('should project and display the pokemon name', () => {
      expect(
        fixture.debugElement.query(By.css('h2')).nativeElement.innerHTML
        ).toContain(fakePokemon.name);
    });
    it('should project and display the pokemon name', () => {
      expect(
        fixture.debugElement.query(By.css('h2')).nativeElement.innerHTML
        ).toContain(fakePokemon.name);
    });
    it('should contain correct image alt value', () => {
      expect(
        fixture.debugElement.query(By.css('img')).nativeElement?.getAttribute('alt')
      ).toContain(fakePokemon.name);
    });
    it('should contain correct image soure value', () => {
      expect(
        fixture.debugElement.query(By.css('img')).nativeElement?.getAttribute('src')
      ).toContain(fakePokemon.sprite);
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
      component.selectedPokemon = fakePokemon
      fixture.detectChanges();

      expect(
        fixture.debugElement.query(By.css('[aria-label="modal-pokemon-image"]')).nativeElement?.getAttribute('alt')
      ).toContain(fakePokemon.name);
    });
    it('should contain correct image soure value', () => {
      component.open = true
      component.selectedPokemon = fakePokemon
      fixture.detectChanges();

      expect(
        fixture.debugElement.query(By.css('[aria-label="modal-pokemon-image"]')).nativeElement?.getAttribute('src')
      ).toContain(fakePokemon.sprite);
    });
    it('should project and display the pokemon name', () => {
      component.open = true
      component.selectedPokemon = fakePokemon
      fixture.detectChanges();

      expect(
        fixture.debugElement.query(By.css('.pokemon-detail-modal h2'))?.nativeElement.innerHTML
      ).toContain(fakePokemon.name);
    })

    it('should project and display the types', () => {
      component.open = true
      component.selectedPokemon = fakePokemon
      fixture.detectChanges();

      const types = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal .types span'));

      expect(types[0].nativeElement.innerHTML).toContain(fakePokemon.types[0]);
      expect(types[1].nativeElement.innerHTML).toContain(fakePokemon.types[1]);

    })

    it('should project and display the belonging color for a type', () => {
      component.open = true
      component.selectedPokemon = fakePokemon
      fixture.detectChanges();

      const types = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal .types span'));

      expect(types[0].classes['bg-red-200']).toBeTruthy()
      expect(types[1].classes['bg-blue-600']).toBeTruthy()
    })

    it('should project and display the size', () => {
      component.open = true
      component.selectedPokemon = fakePokemon
      fixture.detectChanges();

      expect(
        fixture.debugElement.queryAll(By.css('.pokemon-detail-modal .body-stats span'))[0]?.nativeElement.innerHTML
      ).toContain(fakePokemon.height.toString());
    })

    it('should project and display the weight', () => {
      component.open = true
      component.selectedPokemon = fakePokemon
      fixture.detectChanges();

      expect(
        fixture.debugElement.queryAll(By.css('.pokemon-detail-modal .body-stats span'))[2]?.nativeElement.innerHTML
      ).toContain(fakePokemon.weight.toString());
    })

    describe('statistic items', () => {
      it('should project and display the hp value', () => {
        component.open = true
        component.selectedPokemon = fakePokemon
        fixture.detectChanges();

        const statisticElement = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal [aria-label="pokemon-statistic-item"'))[0]
        
        expect(
          statisticElement.query(By.css('span.text-right')).nativeElement.innerHTML
        ).toContain(fakePokemon.stats.hp.toString());
      })

      it('should project and display the attack value', () => {
        component.open = true
        component.selectedPokemon = fakePokemon
        fixture.detectChanges();

        const statisticElement = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal [aria-label="pokemon-statistic-item"'))[1]
         
        expect(
          statisticElement.query(By.css('span.text-right')).nativeElement.innerHTML
        ).toContain(fakePokemon.stats.attack.toString());
      })

      it('should project and display the defense value', () => {
        component.open = true
        component.selectedPokemon = fakePokemon
        fixture.detectChanges();

        const statisticElement = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal [aria-label="pokemon-statistic-item"'))[2]
        
        expect(
          statisticElement.query(By.css('span.text-right')).nativeElement.innerHTML
        ).toContain(fakePokemon.stats.defense.toString());
      })

      it('should project and display the special attack value', () => {
        component.open = true
        component.selectedPokemon = fakePokemon
        fixture.detectChanges();
        
        const statisticElement = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal [aria-label="pokemon-statistic-item"'))[3]
        
        expect(
          statisticElement.query(By.css('span.text-right')).nativeElement.innerHTML
        ).toContain(fakePokemon.stats.specialAttack.toString());
      })

      it('should project and display the special defense value', () => {
        component.open = true
        component.selectedPokemon = fakePokemon
        fixture.detectChanges();

        const statisticElement = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal [aria-label="pokemon-statistic-item"'))[4]
        
        expect(
          statisticElement.query(By.css('span.text-right')).nativeElement.innerHTML
        ).toContain(fakePokemon.stats.specialDefense.toString());
      })

      it('should project and display the speed', () => {
        component.open = true
        component.selectedPokemon = fakePokemon
        fixture.detectChanges();

        const statisticElement = fixture.debugElement.queryAll(By.css('.pokemon-detail-modal [aria-label="pokemon-statistic-item"'))[5]
        
        expect(
          statisticElement.query(By.css('span.text-right')).nativeElement.innerHTML
        ).toContain(fakePokemon.stats.speed.toString());
      })
    })

    it('should close the modal', waitForAsync(() => {
      component.open = true
      component.selectedPokemon = fakePokemon
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
