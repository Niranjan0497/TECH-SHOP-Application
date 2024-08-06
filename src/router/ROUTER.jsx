import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TECHSHOPDATA from '../components/mainpage/TECHSHOPDATA'

function ROUTER() {
  return (
   <>
   <Routes>
    <Route path='/' element={<TECHSHOPDATA/>}></Route>
   </Routes>
   </>
  )
}

export default ROUTER
