import React, { useState } from 'react'
import './AllProducts.css'
import productsData from '../productsData/PRODUCTDATA'
import AllProductLayout from './AllProductLayout';
import Advantages from '../advantages/Advantages';
import FOOTER from '../footer/FOOTER';

const AllProducts = () => {

  const [filterProducts, updatedFilterProduct] = useState([]);
  const [activeSort, setActiveShort]= useState('');

  const clearFliters = () =>{
    updatedFilterProduct([]);

  }


  const latestProducts = () => {
    const latest = productsData.slice(0,6);
    updatedFilterProduct(latest);
    setActiveShort('latest')
  };

  const featuredProduct = ()=>{
    const feature = productsData.filter(product => product.tag === "featured-product");
    updatedFilterProduct(feature);
    setActiveShort('featured');
  };

  const topRatedProduct = () =>{
    const topRated = productsData.filter(product => product.rateCount === 5);
    updatedFilterProduct(topRated);
    setActiveShort('topRated')
  }
  
  const lowPriceProduct = () =>{
    const lowPrice = [...productsData].sort((a,b) => a.finalPrice - b.finalPrice);
    updatedFilterProduct(lowPrice);
    setActiveShort('lowPrice')
  }

  const heighPriceProduct = () =>{
    const heighPrice = [...productsData].sort((a,b) => b.finalPrice - a.finalPrice);
    updatedFilterProduct(heighPrice);
    setActiveShort('heighPrice')
  }
 




  return (
   <>
      <div className="allProducts ">
        
        <div className="
         ">
          <div className="allProducts-SortBy">
            {
             activeSort && <button className='btn btn-danger mt-3 mb-5 ps-4 pe-4' onClick={clearFliters}>clearFliters</button>
            }
            <h4 className='custom-sortBy'>Sort By</h4>
            <hr />
            <ul className='list-unstyled '>
              <li onClick={latestProducts} className={activeSort === 'latest'? 'active': ' '}>Latest</li>
              <li onClick={featuredProduct} >Featured</li>
              <li onClick={topRatedProduct}>Top Rated</li>
              <li onClick={lowPriceProduct}>Price(Lowest First)</li>
              <li onClick={heighPriceProduct}>Price(Highest First)</li>
            </ul>
          </div>

          <div className="allProduct-FilterBy">
            <h4 className='mt-5'>Filter By</h4>
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

      
        <div className="flexGallery">
          {
            (filterProducts.length > 0 ? filterProducts : productsData).map(item => (
              <AllProductLayout key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
      <Advantages />
        <FOOTER />
   </>
   
  )
}

export default AllProducts
