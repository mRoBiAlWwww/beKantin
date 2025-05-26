import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Makan Enak dengan Bahan Terbaik, Kapan Saja dan di Mana Saja 
                    untuk Pengalaman Bersantap yang Tak Terlupakan</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>HUBUNGI KAMI</h2>
                <ul>
                    <li>081326587320</li>
                    <li>contact@cdefilkom.com</li>
                </ul>
            </div>

        </div>
        <p className='footer-copyright'>Copyright 2025 Cdefilkom.com All Right Reserved</p>
    </div>
  )
}

export default Footer
