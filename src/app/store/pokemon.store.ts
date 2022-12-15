import { Injectable } from "@angular/core";
import { PokemonService } from "@pokemon-service/pokemon.service";
import { PokemonsState, Pokemon } from "../interfaces/interfaces";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable, pipe, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class PokemonStore extends ComponentStore<PokemonsState> {

    constructor(private pokemonService: PokemonService){
        super({pokemons: []})
    }

    readonly pokemons$: Observable<Pokemon[]> = this.select(
        state => state.pokemons
    )

    readonly getPokemons = this.effect<void>(
        pipe(
            switchMap(() => 
                this.pokemonService.fetchPokemons().pipe(
                    tapResponse(
                        pokemons => { this.addPokemons(pokemons)},
                        (error: HttpErrorResponse) => console.error(error)                    )
                )
            )
        )
    )

    private readonly addPokemons = this.updater((state, pokemons: Pokemon[]) => ({
        pokemons: [...state.pokemons, ...pokemons]
    }))

}   