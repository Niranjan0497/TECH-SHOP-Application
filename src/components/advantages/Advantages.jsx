import servicesData from "./ServiceData";
import React from 'react'
import './Advantages.css'

const Advantages = () => {
  return (
    <>

    <h2 className="d-flex justify-content-center mb-5 mt-5">Our Advantages</h2>
    <div className=" ourAdvantages-main container d-flex mb-5 ">
    {
        servicesData.map((item)=>(
            <div className="ourAdvantages mb-5 mt-5">
                
                <div className="ourAdvantages-description">
                    <p className="ourAdvantages-icons ">{item.icon}</p>
                </div>
                    <div className="ourAdvantages-info ">
                        <p className="text-bold">{item.title}</p>
                        <p className="text-secondary">{item.info}</p>
                    </div>
                
            </div>
        ))
    }
    </div>
    </>
  )
}

export default Advantages
