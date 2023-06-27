import React from 'react';
import {Link} from 'react-scroll';
import p1 from '../assets/p1.png'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark custom-nav ">
          <div className="container-fluid">
              <a className="navbar-brand brand" href="/"><div  >
            <img className='logo' src={''} alt="logo" />
        </div></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
                  <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
                  <li><Link to="footer" smooth={true} duration={10}>Follow Us</Link></li>
                </ul>
              </div>
          </div>
        </nav>
    </>
  )
}
