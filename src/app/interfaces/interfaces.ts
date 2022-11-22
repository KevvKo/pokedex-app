export interface Pokemon {
  id: number,
  name: string
  height: number
  weight: number
  stats: PokemonStats
  types: string []
  abilities: string []
  sprite: string
}

export interface PokemonStats {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

export interface PokemonAPI {
  next: string
  previous: string,
  results: any[]
}