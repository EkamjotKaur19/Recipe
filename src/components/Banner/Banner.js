import React from 'react'
import img from '../../assets/b2.webp'
import '../Banner/banner.css'

export default function Banner() {
  return (
    <div id="main" className='main' >
        <div className="parents">
            <div className="child title">
                <h3 className='hero-title'>Unleash your<strong className='sp-text'>Culinary</strong>  Creativity with <br /><strong className='sp-text'>Let's Cook !!!</strong></h3>

                <p className='hero-title2'>Search for a Recipe below</p>
                
            </div>
            <div className="child">
                <img src={img} alt='' className='img-banner'/>
            </div>
        </div>
      
    </div>
  )
}
