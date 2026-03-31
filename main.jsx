import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './home'
import { BrowserRouter, Routes, Route } from "react-router";
import Restaurantmenu from './Restaurantmenu';
import SearchFood from './searchfood';

import Restaurantoption from './restaurantoption'
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/restaurant' element={<Restaurantoption></Restaurantoption>}></Route>
    <Route path='/city/delhi/:id' element={<Restaurantmenu></Restaurantmenu>}></Route>  //id -ek dynamic parameter hai (placeholderki tarah)
    <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
createRoot(document.getElementById('root')).render(<App></App>)
