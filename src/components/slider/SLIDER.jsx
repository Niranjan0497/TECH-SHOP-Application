import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'


function SLIDER() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item className='images'>
        <img src="images/products/sonyXb910n-1.png" alt="sonyXb910-img" className='img-fluid' />
        <Carousel.Caption>
            <h2 className='background-text'>Over Ear</h2>
            <div className="Product_info">
              <h6 className='product-tittle'>Sony WH-XB910N</h6>
              <p className='product-text_01'> Give Your </p>
              <p className='product-text_02'> Favourite Music A </p>
              <p className='product-text_03'> Boost</p>
              <span>13,489 <strike> 19,990</strike></span>
              <button className='btn btn-danger'>Shop Now</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='images'>
        <img src="images/products/jbl660nc-1.png" alt="jbl660" className='img-fluid'/>
        <Carousel.Caption>
        <h2 className='background-text'>Over Ear</h2>
            <div className="Product_info">
              <h6 className='product-tittle'>Sony WH-XB910N</h6>
              <p className='product-text_01'> Give Your </p>
              <p className='product-text_02'> Favourite Music A </p>
              <p className='product-text_03'> Boost</p>
              <span>13,489 <strike> 19,990</strike></span>
              <button className='btn btn-danger'>Shop Now</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='images'>
        <img src="images/products/boat131-1.png" alt="boat131-img" className='img-fluid' />
        <Carousel.Caption>
        <h2 className='background-text'>Over Ear</h2>
            <div className="Product_info">
              <h6 className='product-tittle'>Sony WH-XB910N</h6>
              <p className='product-text_01'> Give Your </p>
              <p className='product-text_02'> Favourite Music A </p>
              <p className='product-text_03'> Boost</p>
              <span>13,489 <strike> 19,990</strike></span>
              <button className='btn btn-danger'>Shop Now</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



  );


}

export default SLIDER;