import React,{Component} from 'react'
import { Navbar,NavbarBrand,Jumbotron } from 'reactstrap'

class HeaderComponent extends Component
{
  render()
  {
    return(
      <>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            Logo
          </NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-12">
              <h1>Travshare</h1>
              <p>We make travelling a better experience</p>
            </div>
          </div>
        </div>
      </Jumbotron>
      </>
    )
  }
}
export default HeaderComponent;
