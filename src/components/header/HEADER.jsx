import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import "./HEADER.css"
import {Link} from 'react-router-dom'
export default function HEADER() {
  return (
    <>
    <nav className='navbar navbar-extand-lg bg-black sticky-top'>
     <div className="container-fluid">
     <Link to='/' className='navbar-brand text-decration-none'>
     <h1 className='text-white ms-3'>TECH-SHOP</h1></Link>
      <ul className='d-flex list-unstyled flex-row gap-4 text-white me-3'>
        <li><CiSearch size={25}/></li>
        <Link className='text-decration-none'><li className='text-white'><IoMdCart size={25} /></li> </Link>
        <li><LuUser2 size={25}/></li>
      </ul>
    </div>    
    </nav>   
    </>
  )
}

