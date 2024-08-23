import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import productsData from '../productsData/PRODUCTDATA';
import './ProductSpecification.css'
import { IoMdStar } from 'react-icons/io';


const ProductSpecification = () => {
    const {id} = useParams();
    console.log(id);
    
   
    
    const [product,setProduct] = useState();
    const [selectedimage,setSelectedimage]=useState(' ');


    useEffect(()=>{
        const selectedProduct = productsData.find(item => item.id === parseInt(id));
        if(selectedProduct){
            setProduct(selectedProduct);
            setSelectedimage(selectedProduct.images[0]);
        }

    },[id])
    
    if (!product) {
        return <div>Loading...</div>;
     }



  return (
    <>
        <div className="flexGallery d-flex justify-content-around ">
            <div className="side-imgs">
                <ul className='list-unstyled' >
                    {product.images.map((image,index)=>(
                        <li key={index} className={selectedimage === image ? 'active-image ':' '} >
                            <img  src={image} alt={`${product.title} ${index+1}`} className=' custom-img_styling  bg-black '  onClick={()=>setSelectedimage(image)} width={100}/>
                            <br />
                        </li>
                        ))}
                </ul>
            </div>
            <div className='main-Image'>
                <img src={selectedimage} alt={product.title} width={650} height={600}/>
            </div>
            <div className="specifications">
                <div className="specifications-firstPart text-secondary">
                    <h3>{product.title}</h3>
                    <p>{product.info}</p>
                <pre>
                    <span className='text-danger'>
                        {[...Array(product.rateCount)].map((_,i)=> <IoMdStar key={i}/>)}
                    </span> | {product.ratings} Ratings
                </pre>
                </div>
                <hr width={550} />
                <div className="specifications-price text-secondary mt-3  mb-5">
                    <p className='custom-specifications-priceText text-secondary'>₹{product.finalPrice} <strike>{product.originalPrice}</strike></p>
                    <div className="specifications-priceAmount d-flex justify-content-between">
                        <h6>
                            You Save: {Math.round(product.originalPrice - product.finalPrice)} (
                                {Math.round(((product.originalPrice - product.finalPrice)/product.originalPrice)*100)}%
                            )
                        </h6>
                        <button className='specifications-button btn btn-success ps-4 pe-4 pt-2 pb-2'>✔ In Stock</button>
                    </div>
                    <p>(inclusive of all taxes)</p>
                </div>
                <hr />
                <div className="specifications-offers text-secondary mt-3 mb-5">
                    <p className='fw-bold fs-5'>Offers and Discounts</p>
                    <pre className='text-secondary'><button>No Cost EMI on Credit Card</button> <button>Pay Later & Avail Cashback</button></pre>
                </div>
                <hr />
                <button className='btn btn-danger ps-5 pe-5 pt-2 pb-2 mt-3'>Add To Cart</button>
            </div>


        </div>
    </>
  )
}

export default ProductSpecification
