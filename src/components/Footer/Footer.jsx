import React from 'react'
import './Footer.scss'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Soy un alquimista de lo absurdo y hechicero del humor negro. Desde mi cueva secreta, donde los gatos con ojos de cristal vigilan cada rincón, me dedico a traer la magia y el misterio directamente a tu puerta.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>GD</h2>
            <ul>
                <li>Inicio</li>
                <li>Delivery</li>
                <li>Privacidad y terminos</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Contacto</h2>
            <ul>
                <li>1456-7890</li>
                <li>contacto@GD.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © - All Right Reserved.</p>
    </div>
  )
}

export default Footer
