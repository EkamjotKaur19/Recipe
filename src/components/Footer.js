import React from 'react'

export default function Footer() {
  return (
    <>
    <footer id='footer'>
      
      <div className="foot text-center p-3"  >
        <h5 className="follow-head">Follow Us On</h5>
        <ul className="follow">
            <li id="sound">
              <i class="fa-brands fa-instagram"></i>
            </li>

            <li id="copy">
              <i class="fa-brands fa-facebook"></i>
            </li>

            <li id="twitter">
                <i class="fa-brands fa-twitter"></i>
            </li>
        </ul>

        <div className="foot text-center p-3"  >
          © 2023 Copyright : 
          
          <a className="text" href="/" > Let'sCook.com</a>
        </div>
        
      </div>
    </footer>
    </>
  )
}
