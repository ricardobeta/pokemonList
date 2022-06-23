import React from 'react'
import { List } from '../components/List'
import { PaginationButtons } from '../components/PaginationButtons'
import { PokemonInfo } from '../components/PokemonInfo'
import '../styles/home.css'

export const Home = () => {
    
  return (
    <section className='Container'>
        <div className='Title'>
            <h1>Lista de Pokemon</h1>
        </div>
        <div className="Manager">
        <div className='List'>
            <List/>
        </div>
        <div className='ViewP'>
            <PokemonInfo/>
        </div>
        </div>
        <div className="Pagination">
            <PaginationButtons/>
        </div>
    </section>
  )
}
