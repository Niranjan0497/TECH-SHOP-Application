import React from 'react'
import './AllProducts.css'


const AllProductLayout = ({item}) => {

    const  {images, title, info, finalPrice,originalPrice, rateCount,id} =item
  return (
    <>
        <div className="custom-allCards card">
            <div className="custom-allCards_img cart-img">
                <img src={images[0]} alt="product-img" style={{height:"250px" }}  />
            </div>
        </div>

    </>
  )
}

export default AllProductLayout
