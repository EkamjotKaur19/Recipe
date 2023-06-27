import { ReactComponent as Brand } from '../assets/logoipsum-226.svg'
import { useState } from 'react'
import {Link} from 'react-scroll';

const Nav = () => {
    const [showNavbar, setShowNavbar] = useState(false)
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Brand />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            Menu
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
              <Link to="home" smooth={false} duration={1000}>Home</Link>
              </li>
              <li>
              <Link to="about" smooth={false} duration={1000}>About</Link>
              </li>
              <li>
              <Link to="footer" smooth={false} duration={1000}>Follow</Link>
              </li>
              <li>
              <Link to="contact" smooth={false} duration={1000}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Nav