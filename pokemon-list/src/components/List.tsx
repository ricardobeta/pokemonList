import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Context } from '../context/Context';
import { usePokemon } from '../hooks/usePokemon';
import {  Result } from '../models/Result.model';
import "../styles/list.css"
import { Pokemon } from './Pokemon';

export const List = () => {

    const  {getPokemonList} = usePokemon();
    const [searchParams, setSearchParams] = useSearchParams();
    const [pokemonsItems, setPokemonsItems] = useState<JSX.Element[]>([]);
    const {setName} =useContext(Context)


    useEffect(() => {
        const actual = searchParams.get("page");
        if(actual != null) {
            console.log()
            getPokemonList(Number.parseInt(actual)).then(
                result => mapperItems(result.results)
            )
        } else {
            setSearchParams('page=1')
        }
    }, [searchParams, setSearchParams])

    
    const mapperItems = async (pokemons: Result[]) => {
        const auxList = pokemons.map(
             (item,i) => <Pokemon result={item} key={i}/>
        )
        setPokemonsItems([...auxList])
    }


  return (
    <div className="ContainerList">
        <input type="text"  className='SearchInput' placeholder='BUSCAR' 
        onChange={(e)=>setName(e.target.value.toLowerCase())}/>
        <div className="ContainerItems">
        {pokemonsItems}
        </div>
    </div>
  )
}
