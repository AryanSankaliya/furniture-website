import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      {/* Main Footer */}
      <div className='footer'>
        {/* Description Part */}
        <div className='description'>
          <h2 className='logo'>Furnino.</h2>
          <div className='addres'>
            <pre>400 University Drive Suite 200 Coral</pre>
            <pre>Gables,</pre>
            <pre>FL 33134 USA</pre>
          </div>
        </div>

        {/* Links */}
        <div className='link'>
          <p className='link-title'>Links</p>
          <Link to='/home'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>

        {/* Help */}
        <div className='help'>
          <p className='footer-title'>Help</p>
          <Link to='/payment'>Payment Options</Link>
          <Link to='/returns'>Returns</Link>
          <Link to='/privacy'>Privacy Policies</Link>
        </div>

        {/* Newsletter */}
        <div className='newsletter'>
          <p className='footer-title'>Newsletter</p>
          <div className='newsletter-box'>
            <div className='newsletter-input'>
              <input type='email' placeholder='Enter Your Email Address' />
              <span className='underline'></span>
            </div>
            <div className='newsletter-button'>
              <button>SUBSCRIBE</button>
              <span className='underline'></span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='bottom-bar'>
        <p>2025 Funiro. All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
