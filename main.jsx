import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './home'
import { BrowserRouter, Routes, Route } from "react-router";
import Restaurantmenu from './Restaurantmenu';
import SearchFood from './searchfood';
import SecondaryHome from './secondaryhome';
import { store } from '../store/store';
import {Provider} from "react-redux"

import Restaurantoption from './restaurantoption'
function App(){
  return(
    <>
    <Provider store={store} >
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route element={<SecondaryHome></SecondaryHome>} >
    <Route path='/restaurant' element={<Restaurantoption></Restaurantoption>}></Route>
    <Route path='/city/delhi/:id' element={<Restaurantmenu></Restaurantmenu>}></Route>  {/*id -ek dynamic parameter hai (placeholderki tarah*/}
    <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}
createRoot(document.getElementById('root')).render(<App></App>)
