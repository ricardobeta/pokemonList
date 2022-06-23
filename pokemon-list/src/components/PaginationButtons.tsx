import React from 'react'
import { useSearchParams } from 'react-router-dom';
import "../styles/buttons.css"
export const PaginationButtons = () => {


    let [searchParams, setSearchParams] = useSearchParams();


    const next = () => {
        const actual = Number.parseInt(searchParams.get("page")!)
        setSearchParams(`page=${actual+1}`)
    }

    const back = () => {
        const actual = Number.parseInt(searchParams.get("page")!)
        setSearchParams(`page=${actual-1}`)
    }


  return (
    <>
    <button onClick={() => back()} className="Button"> Atrás </button>
    <button onClick={() => next()} className="Button"> Siguiente </button>
    </>
  )
}
