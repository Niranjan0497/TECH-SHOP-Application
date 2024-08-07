import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TECHSHOPDATA from '../components/mainpage/TECHSHOPDATA'
import CART from '../components/cart/CART'

function ROUTER() {
  return (
   <>
   <Routes>
    <Route path='/' element={<TECHSHOPDATA/>}></Route>
    <Route path='cart' element={<CART/>}></Route>
   </Routes>
   </>
  )
}

export default ROUTER
