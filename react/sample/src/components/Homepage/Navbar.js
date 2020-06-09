import React from 'react'
import './nav.css';
import {Link} from 'react-router-dom'
function Navbar() {

      return (
        <div>
          <header>
          <nav>
          <div className = "logo"><h1>Logo</h1></div>
            <ul>
              <Link to='/'><li>Home</li></Link>
              <li>About</li>
              <li>Link1</li>
              <Link to='/signin'><li>Signin</li></Link>
            </ul>
          </nav>
        </header>
        </div>
      );
}

export default Navbar;
