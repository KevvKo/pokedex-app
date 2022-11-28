import { faker } from '@faker-js/faker';
import { Pokemon } from '../interfaces/interfaces';

export const FakeAPIData = {
    id: faker.datatype.number(10),
    name: faker.animal.type(),
    height: faker.datatype.number(),
    weight: faker.datatype.number(),
    types: [
        {
            slot: 1,
            type: {
                name: faker.random.word()
            }
        },
        {
            slot: 2,
            type: {
                name: faker.random.word()
            }
        }
    ],
    abilities: [
        {
            ability: {
                name: faker.random.word()
            },
            slot: 2,
        },
        {
            ability: {
                name: faker.random.word()
            },
            slot: 2,
        },
    ],
    stats:[
        {
            base_stat: faker.datatype.number(100),
            stat: {
                name: 'hp'
            }
        },
        {
            base_stat: faker.datatype.number(100),
            stat: {
                name: 'attack'
            }
        },
        {
            base_stat: faker.datatype.number(100),
            stat: {
                name: 'defense'
            }
        },
        {
            base_stat: faker.datatype.number(100),
            stat: {
                name: 'special-attack'
            }
        }
        ,        {
            base_stat: faker.datatype.number(100),
            stat: {
                name: 'special-defense'
            }
        },
        {
            base_stat: faker.datatype.number(100),
            stat: {
                name: 'speed'
            }
        }
    ],
    sprites: {
        front_default: faker.image.imageUrl()
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
