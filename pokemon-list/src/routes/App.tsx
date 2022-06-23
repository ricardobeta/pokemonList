import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ContextProvider } from '../context/Context'
import { Home } from '../pages/Home'

export const App = () => {
    useEffect(() => {
      document.body.style.margin = "0px";
    }, [])
    
  return (
    <BrowserRouter >
        <ContextProvider>
            <Routes>
                <Route  path="/" element={<Home/>} />
            </Routes>
        </ContextProvider>
    </BrowserRouter>
  )
}
