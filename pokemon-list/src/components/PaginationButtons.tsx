import React, { useContext } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Context } from '../context/Context';
import "../styles/buttons.css"
export const PaginationButtons = () => {


    let [searchParams, setSearchParams] = useSearchParams();
    const {state} =useContext(Context)


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
    {
      state.back?<button onClick={() => back()} className="Button"> Atrás </button>:<div></div>
    }
    
    {
      state.next?<button onClick={() => next()} className="Button"> Siguiente </button>:null
    }
    
    </>
  )
}
