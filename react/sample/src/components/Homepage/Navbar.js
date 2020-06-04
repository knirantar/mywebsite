import React from 'react'
import './nav.css';


class Navbar extends React.Component {

render () {
      return (
        <div>
          <nav>
          <div className = "logo"><h1>Logo</h1></div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Link1</li>
              <li>Signin</li>
            </ul>
          </nav>
        </div>
      )
  }
}

export default Navbar;
