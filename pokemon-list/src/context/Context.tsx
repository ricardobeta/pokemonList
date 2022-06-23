import React , { createContext, useReducer } from "react"
import { MyReducer } from "./Reducer"

export interface State {
    name?: string,
    next?: boolean,
    back?: boolean
}


const initialState: State ={
    name: undefined,
    next: undefined,
    back: undefined
}


export interface ContextProps {
    state: State
    setName: (name:string) => void
    setPaginationC: (next:boolean, back: boolean) => void
}


export const Context = createContext({} as ContextProps)


export const ContextProvider = ({children} : any) => {

    const [state, dispatch] = useReducer(MyReducer, initialState)  
    
    const setName = (name:string) => {
        dispatch({type: 'updatedName', payload:name})
    }

    const setPaginationC = (next:boolean, back: boolean) => {
        dispatch({type: 'updatedPaginationController', payload:{back, next}})
    }
    
    return (
        <Context.Provider value={{
            state,
            setName,
            setPaginationC
        }}>
                {children}
        </Context.Provider>
    )
}