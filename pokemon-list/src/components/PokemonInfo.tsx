import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { usePokemon } from '../hooks/usePokemon'
import { PokemonDTO } from '../models/PokemonDTO.model'
import "../styles/pokemonInfo.css"
export const PokemonInfo = () => {

    const { state } = useContext(Context)
    const { getPokemonByName } = usePokemon();
    const [pokemon, setPokemon] = useState<PokemonDTO | undefined>()

    useEffect(() => {
        if (state.name) {
            console.log()
            const getPokemon = async (name:string) => {
               const poke = await  getPokemonByName(name)
               setPokemon(poke)
            }
            getPokemon(state.name)
        }
    }, [state])


    return (
        <div className="ContainerInfo">
            {
                pokemon ?
                    <>
                        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} className="PrincipalImg" />
                        <p>
                            <b># {pokemon?.id}</b>
                        </p>
                        <p>
                            {pokemon?.name.toUpperCase()}
                        </p>
                        <div className="MoreInfo">
                            <p className='SubTitleInfo'>
                                Types:
                            </p>
                            <p className='ContentInfo'>
                                {pokemon.types.map( v => `${v.type.name} `)}
                            </p>
                            <p className='SubTitleInfo'>
                                Peso:
                            </p>
                            <p className='ContentInfo'>
                                {`${pokemon.weight} kg`}
                            </p>
                            <p className='SubTitleInfo'>
                                Sprites:
                            </p>
                            <p className='ContentInfo'>
                               { Object.values(pokemon.sprites)
                               .filter(v=>v!=null &&  typeof v == 'string')
                               .map( (v,i) => <img src={v} alt={v} className="Sprites" key={i} />)
                               }
                            </p>
                            <p className='SubTitleInfo'>
                                Movimientos:
                            </p>
                            <p className='ContentInfo'>
                                {pokemon.moves.slice(0,10).map( v => `${v.move.name} `)}
                            </p>
                        </div>
                    </>
                    :
                    <p>Selecciona o escribe un pokemon valido.</p>
            }
        </div>
    )
}
