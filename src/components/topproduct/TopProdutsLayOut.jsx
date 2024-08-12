import React from 'react'
import './TopProducts.css'
import { IoMdStar } from 'react-icons/io'
import { FaRupeeSign } from "react-icons/fa";




const TopProdutsLayOut = ({item}) => {
  const  {images, title, info, finalPrice,originalPrice, rateCount} =item
    return (
      <div className="custom-carts card  mt-5 bg-dark text-white" >
          <div className="card-img ms-1 p-3">
            <img src={images[0]}  alt="product-img" style={{height:"250px" }} />
          </div>

          <div className='card-body'>
            <div className="card-ratting">
              <span >
                {
                  [...Array(rateCount)].map(i => <IoMdStar key={i} />)
                }
              </span>
            </div>
            <div className="card-tittle">
              {title}
            </div>
            <div className="card-description text-secondary">
              {info}
            </div>
            <hr />
            <div className="card-price">
              <span ><FaRupeeSign />{finalPrice} 
              
              <strike className='ms-1 text-secondary '> <FaRupeeSign />{originalPrice}</strike>
              
              </span>
            </div>

            <div className="cart-button">
              <button className='custom-btn btn btn-danger mt-3 ms-1 '>Add to Cart</button>
            </div>
          </div>

       </div>
       
      );
    }

export default TopProdutsLayOut
