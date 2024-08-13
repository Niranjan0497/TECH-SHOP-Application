import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TECHSHOPDATA from '../components/mainpage/TECHSHOPDATA'
import CART from '../components/cart/CART'
import AllProducts from '../components/allProducts/AllProducts'

function ROUTER() {
  return (
   <>
   <Routes>
    <Route path='/' element={<TECHSHOPDATA/>} />
    <Route path='cart' element={<CART/>} />
    <Route path='All-Products' element={<AllProducts />} />

   </Routes>
   </>
  )
}

export default ROUTER
