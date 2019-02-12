import React from 'react';
import Logo from '../../../src/Assets/Logo/logo.png';
import ManIcon from '../../../src/Assets/Images/Mohan-muruge.jpg'

class Header extends React.Component {
  render() {
    return (
      <header>
 <div className="nav__container">
 <nav className="Navbar__Items">
    <div className="Navbar__Link">
    <img className="logo--size" src={Logo} alt="" />
    </div>
   
  </nav>
  <nav className="Navbar__Items Navbar__Items--right">
    <div className="search__container">
    <input className="search" placeholder="Search" /></div>
   
    <div className="Navbar__Link">
    <input className="upload__button" value="+UPLOAD" type="button" />
    </div>
    <div className="Navbar__Link">
    <img className="man_icon" src={ManIcon} alt="" />
    </div>
  </nav>
</div>

</header>


 
    )
  }
}

export default Header