import { faker } from '@faker-js/faker';
import { Pokemon } from '../interfaces/interfaces';

export const FakePokemon =  {
    id: faker.datatype.number(10),
    name: faker.animal.type(),
    height: faker.datatype.number(),
    weight: faker.datatype.number(),
    stats: {
      hp: faker.datatype.number(100),
      attack: faker.datatype.number(100),
      defense: faker.datatype.number(100),
      specialAttack: faker.datatype.number(100),
      specialDefense: faker.datatype.number(100),
      speed: faker.datatype.number(100)
    },
    types: [faker.random.word(), faker.random.word()],
    abilities: [faker.random.word(), faker.random.word()],
    sprite: faker.image.imageUrl()
}

export const FakeAPIData = {
    id: FakePokemon.id,
    name: FakePokemon.name,
    height: FakePokemon.height,
    weight: FakePokemon.weight,
    types: [
        {
            slot: 1,
            type: {
                name: FakePokemon.types[0]
            }
        },
        {
            slot: 2,
            type: {
                name: FakePokemon.types[1]
            }
        }
    ],
    abilities: [
        {
            ability: {
                name: FakePokemon.abilities[0]
            },
            slot: 2,
        },
        {
            ability: {
                name: FakePokemon.abilities[1]
            },
            slot: 2,
        },
    ],
    stats:[
        {
            base_stat: FakePokemon.stats.hp,
            stat: {
                name: 'hp'
            }
        },
        {
            base_stat: FakePokemon.stats.attack,
            stat: {
                name: 'attack'
            }
        },
        {
            base_stat: FakePokemon.stats.defense,
            stat: {
                name: 'defense'
            }
        },
        {
            base_stat: FakePokemon.stats.specialAttack,
            stat: {
                name: 'special-attack'
            }
        }
        ,        {
            base_stat: FakePokemon.stats.specialDefense,
            stat: {
                name: 'special-defense'
            }
        },
        {
            base_stat: FakePokemon.stats.speed,
            stat: {
                name: 'speed'
            }
        }
    ],
    sprites: {
        front_default: FakePokemon.sprite
    }
}

export const FakePokemons: Pokemon[] = [
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
