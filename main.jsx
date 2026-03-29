import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './home'
import { BrowserRouter, Routes, Route } from "react-router";

import Restaurantoption from './restaurantoption'
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/restaurant' element={<Restaurantoption></Restaurantoption>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
createRoot(document.getElementById('root')).render(<App></App>)
