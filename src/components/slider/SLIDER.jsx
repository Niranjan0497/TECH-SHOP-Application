import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'


function SLIDER() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false} >
      <Carousel.Item className='images'>
        <img src="images/products/sonyXb910n-1.png" alt="sonyXb910-img" className='img-fluid' />
        <Carousel.Caption>
            <h2 className='background-text'>Over Ear</h2>
            <div className="Product_info">
              <h6 className='product-tittle_01'>Sony WH-XB910N</h6>
              <p className='product-text_01'> Give Your Favourite</p>
              <p className='product-text_02'> Music A Boost</p>
              
              <span>13,489 <strike> 19,990</strike></span>
              <button className='btn btn-danger'>Shop Now</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='images'>
        <img src="images/products/jbl660nc-1.png" alt="jbl660" className='img-fluid'/>
        <Carousel.Caption>
        <h2 className='background-text-02'>Over Ear</h2>
            <div className="Product_info-02">
              <h6 className='product-tittle'>JBL Live 600-nc</h6>
              <p className='product-text_02-1'> Keep the Noice Out </p>
              <p className='product-text_02-2'> Or In You Chooice </p>
              
              <span>9,999 <strike>14,999</strike></span>
              <button className='btn btn-danger '>Shop Now</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='images'>
        <img src="images/products/boat131-1.png" alt="boat131-img" className='img-fluid' />
        <Carousel.Caption>
        <h2 className='background-text-03'>In Ear</h2>
            <div className="Product_info-03">
              <h6 className='product-tittle'>Boat Airdopes 131</h6>
              <p className='product-text_03-1'> Featherweight For </p>
              <p className='product-text_03-2'> Comfort All Day </p>
              
              <span >1,099<strike>2,990</strike></span>
              <button className='btn btn-danger '>Shop Now</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );


}

export default SLIDER;