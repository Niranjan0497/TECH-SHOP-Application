import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import "./HEADER.css"
export default function HEADER() {
  return (
    <>
    <nav>
     <div className='nav_main'>
        <h1>TECH-SHOP</h1>
      <ul className='nav-icons'>
        <CiSearch />
        <IoMdCart />
        <LuUser2 />
      </ul>
    </div>    
    </nav>   
    </>
  )
}

