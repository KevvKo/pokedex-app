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
  results: Result[]
}

export interface Result {
	name: string;
	url: string;
}

export interface Ability {
	ability: Ability;
	is_hidden: boolean;
	slot: number;
}

export interface Ability {
	name: string;
	url: string;
}

export interface Type {
	name: string;
	url: string;
}

export interface Type {
	slot: number;
	type: Type;
}

export interface Form {
	name: string;
	url: string;
}

export interface Version {
	name: string;
	url: string;
}

export interface Game_indice {
	game_index: number;
	version: Version;
}

export interface Move {
	name: string;
	url: string;
}

export interface Move_learn_method {
	name: string;
	url: string;
}

export interface Version_group {
	name: string;
	url: string;
}

export interface Version_group_detail {
	level_learned_at: number;
	move_learn_method: Move_learn_method;
	version_group: Version_group;
}

export interface Move {
	move: Move;
	version_group_details: Version_group_detail[];
}

export interface Specy {
	name: string;
	url: string;
}

export interface Dream_world {
	front_default: string;
	front_female?: any;
}

export interface Home {
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

export interface OfficialArtwork {
	front_default: string;
}

export interface Other {
	dream_world: Dream_world;
	home: Home;
	officialArtwork: OfficialArtwork;
}

export interface RedBlue {
	back_default: string;
	back_gray: string;
	back_transparent: string;
	front_default: string;
	front_gray: string;
	front_transparent: string;
}

export interface Yellow {
	back_default: string;
	back_gray: string;
	back_transparent: string;
	front_default: string;
	front_gray: string;
	front_transparent: string;
}

export interface GenerationI {
	redBlue: RedBlue;
	yellow: Yellow;
}

export interface Crystal {
	back_default: string;
	back_shiny: string;
	back_shiny_transparent: string;
	back_transparent: string;
	front_default: string;
	front_shiny: string;
	front_shiny_transparent: string;
	front_transparent: string;
}

export interface Gold {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
	front_transparent: string;
}

export interface Silver {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
	front_transparent: string;
}

export interface GenerationII {
	crystal: Crystal;
	gold: Gold;
	silver: Silver;
}

export interface Emerald {
	front_default: string;
	front_shiny: string;
}

export interface FireredLeafgreen {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
}

export interface RubySapphire {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
}

export interface GenerationIII {
	emerald: Emerald;
	fireredLeafgreen: FireredLeafgreen;
	rubySapphire: RubySapphire;
}

export interface DiamondPearl {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

export interface HeartgoldSoulsilver {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

export interface Platinum {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

export interface GenerationIV {
	diamondPearl: DiamondPearl;
	heartgoldSoulsilver: HeartgoldSoulsilver;
	platinum: Platinum;
}

export interface Animated {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

export interface BlackWhite {
	animated: Animated;
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

export interface GenerationV {
	blackWhite: BlackWhite;
}

export interface OmegarubyAlphasapphire {
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

export interface XY {
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

export interface GenerationVI {
	omegarubyAlphasapphire: OmegarubyAlphasapphire;
	xy: XY;
}

export interface Icon {
	front_default: string;
	front_female?: any;
}

export interface UltraSunUltraMoon {
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

export interface GenerationVII {
	icons: Icon;
	ultraSunUltraMoon: UltraSunUltraMoon;
}

export interface Icon {
	front_default: string;
	front_female?: any;
}

export interface GenerationVIII {
	icons: Icon;
}

export interface Version {
	generationI: GenerationI;
	generationII: GenerationII;
	generationIII: GenerationIII;
	generationIV: GenerationIV;
	generationV: GenerationV;
	generationVI: GenerationVI;
	generationVII: GenerationVII;
	generationVIII: GenerationVIII;
}

export interface Sprite {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
	other: Other;
	versions: Version;
}

export interface Stat {
	name: string;
	url: string;
}

export interface Stat {
	base_stat: number;
	effort: number;
	stat: Stat;
}

export interface PokemonData {
	abilities: Ability[];
	base_experience: number;
	forms: Form[];
	game_indices: Game_indice[];
	height: number;
	held_items: any[];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: Move[];
	name: string;
	order: number;
	past_types: any[];
	species: Specy;
	sprites: Sprite;
	stats: Stat[];
	types: Type[];
	weight: number;
}