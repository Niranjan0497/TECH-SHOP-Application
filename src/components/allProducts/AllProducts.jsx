import React, { useState } from 'react'
import './AllProducts.css'
import productsData from '../productsData/PRODUCTDATA'
import AllProductLayout from './AllProductLayout';


const AllProducts = () => {

  const [filterProducts, updatedFilterProduct] = useState([]);
  const [activeSort, setActiveShort]= useState('');


  const latestProducts = () => {
    const latest = productsData.slice(0,6);
    updatedFilterProduct(latest);
    setActiveShort('latest')
  }

  



  return (
   <>
      <div className="allProducts d-flex gap-2">

        <div className="allProducts-Specification text-secondary">
          
          <div className="allProducts-SortBy">
            <h4 className='custom-sortBy'>Sort By</h4>
            <hr />
            <ul className='list-unstyled text-secondary'>
              <li onClick={latestProducts}>Latest</li>
              <li>Featured</li>
              <li>Top Rated</li>
              <li>Price(Lowest First)</li>
              <li>Price(Highest First)</li>
            </ul>
          </div>

          <div className="allProduct-FilterBy">
            <h4>Filter By</h4>
            <hr />
            <div className="allProduct-Brands mb-4">
              <h4 className='mb-3'>Brands</h4>
            <input type="checkbox" id='JBL'/>  <label htmlFor="JBL">JBL</label> <br />
            <input type="checkbox" id='BoAt'/> <label htmlFor="BoAt">BoAt</label><br />
            <input type="checkbox" id='Sony'/> <label htmlFor="SonyL">Sony</label>
            </div>
            
            <div className="allProduct-Category mb-4">
              <h4 className='mb-3'>Category</h4>
            <input type="checkbox" id='JBL'/>  <label htmlFor="JBL">Headphones</label> <br />
            <input type="checkbox" id='BoAt'/> <label htmlFor="BoAt">Earbuds</label><br />
            <input type="checkbox" id='Sony'/> <label htmlFor="SonyL">Earphones</label> <br />
            <input type="checkbox" id='JBL'/>  <label htmlFor="JBL">Nexkbrands</label> 
            </div>

            <div className="allProduct-PriceRange">
              <h4>Price</h4>
              <input type="range" />
            </div>
          </div>
          
        </div>

      <div className="allProduct-logic">
        <div className="flexGallery">
          {
            (filterProducts.length > 0 ? filterProducts : productsData).map(item => (
              <AllProductLayout key={item.id} item={item}/>
            ))
          }
        </div>
      </div>


      </div>
   </>
  )
}

export default AllProducts
