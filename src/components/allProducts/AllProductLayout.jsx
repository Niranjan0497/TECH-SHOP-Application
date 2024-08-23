import React from 'react'
import './AllProducts.css'
import { IoMdStar } from 'react-icons/io'
import { FaRupeeSign } from "react-icons/fa";


const AllProductLayout = ({item}) => {

    const  {images, title, info, finalPrice,originalPrice, rateCount} =item
  return (
    <>
        <div className="custom-allCards card text-secondary bg-drak">
            <div className="custom-allCards_img ">
                <img  src={images[0]} alt="product-img" className='custom-allCards_img ' />
            </div>
    
            <div className="custom-allCards_Ratting">
            <span >
                {
                  [...Array(rateCount)].map(i => <IoMdStar key={i} />)
                }
              </span>
            </div>
            <div className="custom-allCards_title">
              {title}
            </div>
            <div className="custom-allCards_description">
              {info}
            </div>
            <hr />
            <div className="custom-allCards_price">
              <span><FaRupeeSign />{finalPrice} <strike>{originalPrice}</strike> </span>
            </div>
            <div className="custom-allCards-button">
              <button className='custom-btn btn btn-danger mt-3 ms-1 '>Add to Cart</button>
            </div>
        </div>
        
        
    </>
  
  )
}

export default AllProductLayout
