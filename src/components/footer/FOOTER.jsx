import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const FOOTER = () => {
  return (
    <>
    <div className="Footer-description mb-4 mt-4  ms-5 d-flex ">
      <div className="container">
        <h2>Tech-Shop</h2>
        <p className='text-start text-secondary'>Subscribe to our Email lerts to receive <br />
        early discount offers, and new products <br />
        info
        </p>
        <input type="email" placeholder='Email Address*' className='form-control  custom-width'/> <br />
        <button className='btn btn-danger ps-4 pe-4'>Subscribe</button>
      </div>
      <div className="Footer-HelpDeck container text-secondary ms-5 ps-5">
        <p className="mb-5 Custom-text">Help</p>
        <p>FAQs</p>
        <p>Track Order</p>
        <p>Cancel Order</p>
        <p>Return Order</p>
        <p>Warranty info</p>
      </div>
      <div className="Footer-PoliciesInfo container text-secondary ">
        <p className="mb-5 Custom-text">Policies</p>
        <p>Retunr Policy</p>
        <p>Security</p>
        <p>Sitemap</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
      <div className="Footer-ContactInfo container text-secondary ">
        <p className="mb-5 Custom-text">Company</p>
        <p>About Us</p>
        <p>Contact s</p>
        <p>Service Centres</p>
        <p>Careers</p>
        <p>Affiliates</p>
      </div>
    </div>
    <hr />
    <div className="Footer-end d-flex ms-5">
      <p>2024| All Right Reserved.Built by|NIRANJAN KADARLA</p>
      <span className='me-5'>
      <FaFacebookF />
      <FaXTwitter />
      <FaInstagram />
      <FaLinkedinIn />
      </span>
    </div>
    </>
  )
}

export default FOOTER