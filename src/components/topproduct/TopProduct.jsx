import React from 'react'
import './TopProducts.css'
import { useState } from 'react'
import productsData from '../productsData/PRODUCTDATA'
import TopProdutsLayOut from './TopProdutsLayOut'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

const TopProduct = () => {

  const [filterProducts,updatedFilterProduct]=useState([]);

  const allProducts = ()=>{
    updatedFilterProduct([])
  }

  const categoryFilter = (category)=>{
    const filtered = productsData.filter(product => product.category === category);
    updatedFilterProduct(filtered);
  }



  return (
    <>
    <div className="Topproducts">
      <h2 className='container text-center mt-5 mb-5'>Top Products</h2>
        <div className="product-category">
          <ul className= 'custom-style container  list-unstyled text-secondary mt-5 '>
            <li onClick={allProducts}>ALL</li>
            <li onClick={() => categoryFilter('Headphones')}>Headphone</li>
            <li onClick={() => categoryFilter('Earbuds')}>Earbuds</li>
            <li onClick={() => categoryFilter('Earphones')}>Earphones</li>
            <li onClick={() => categoryFilter('Neckbands')}>Neckbrands</li>
          </ul>
      </div>
      <div className="flexGallery container d-flex flex-wrap gap-3 mt-5  ">
        {
          (filterProducts.length > 0 ? filterProducts : productsData ).slice(0,11).map(item=>(
            <TopProdutsLayOut key={item.id} item={item} /> 
          ))
        }
        <div className="custom-allCarts card bg-dark  ">
         <Link className='text-decoration-none text-secondary' to={'All-Products'}>
         <div className="cart-info ">
          <p>Browse All</p>
          <p>Products <FaArrowRightLong /> </p>
          
         </div>
        
         </Link>
      </div>
      </div>
      
    </div>
    </>
  )
}

export default TopProduct
