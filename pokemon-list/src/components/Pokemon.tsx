import React, { useContext, useEffect, useState } from 'react'
import { usePokemon } from '../hooks/usePokemon'
import { PokemonItem } from '../models/PokemonItem'
import { Result } from '../models/Result.model'
import { Context } from '../context/Context'
import "../styles/pokemon.css"
interface Props {
    result: Result
}
export const Pokemon = ({ result }:Props) => {

    const  {getPokemonByUrl} = usePokemon();
    const [pokemon, setPokemon] = useState<PokemonItem>()
    const {setName} = useContext(Context)

    useEffect(() => {
     getPokemonByUrl(result.url).then(
        pokemonDTO => {
          const pokeMapper: PokemonItem = {
            url: result.url,
            id: pokemonDTO.id,
            img: pokemonDTO.sprites.other['official-artwork'].front_default,
            name: pokemonDTO.name
          }
          setPokemon(pokeMapper)
        }
     )
    }, [result])
    

  return (
    <div className='ContainerPokemon' onClick={()=> setName(pokemon?.name!)}>
       <img src={pokemon?.img} alt={pokemon?.name} className="PokemonImg"/>
       <p>
        <b># {pokemon?.id}</b>
       </p>
       <p>
        {pokemon?.name.toUpperCase()}
       </p>
    </div>
  )
}
