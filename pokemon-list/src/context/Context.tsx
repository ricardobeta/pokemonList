import React , { createContext, useReducer } from "react"
import { MyReducer } from "./Reducer"

export interface State {
    name?: string
}


const initialState: State ={
    name: undefined
}


export interface ContextProps {
    state: State
    setName: (name:string) => void
}


export const Context = createContext({} as ContextProps)


export const ContextProvider = ({children} : any) => {

    const [state, dispatch] = useReducer(MyReducer, initialState)  
    
    const setName = (name:string) => {
        dispatch({type: 'updatedName', payload:name})
    }
    
    return (
        <Context.Provider value={{
            state,
            setName
        }}>
                {children}
        </Context.Provider>
    )
}