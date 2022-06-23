import React from 'react'
import { PokemonDTO } from '../models/PokemonDTO.model'
import { PaginationResult } from '../models/Result.model'

export const usePokemon = () => {

    const headers = {
        'Content-Type': 'application/json'
    }

    const baseUrl = `https://pokeapi.co/api/v2/pokemon`

    const getPokemonList = async (page: number) => {
        const offset: number = 4 * (page - 1);
        const response: PaginationResult = await fetch(`${baseUrl}?offset=${offset}&limit=4`, { method: 'GET', headers })
            .then(async res => await res.json())
        return response;
    }

    const getPokemonByUrl = async (pokemonUrl: string) => {
        const response:PokemonDTO = await fetch(`${pokemonUrl}`, { method: 'GET', headers })
        .then(async res => await res.json())
        return response;
    }

    const getPokemonByName = async (name:string) => {
        const response:PokemonDTO | undefined = await fetch(`${baseUrl}/${name}`, { method: 'GET', headers })
        .then(async res => await res.json()).catch(
            () => undefined 
        )
        return response;
    }

    return { getPokemonList, getPokemonByName, getPokemonByUrl }
}
