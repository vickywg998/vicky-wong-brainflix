import React from 'react';
import { Link } from 'react-router-dom'
import ManIcon from '../Assets/Images/Mohan-muruge.jpg'
import Logo from '../Assets/Logo/logo.png'

const Header= props => {

    return (
      <header>
        <div className="nav__container">
          <div className="nav__wrapper">
            <nav className="Navbar__Items">
              <div className="Navbar__Link logo__position">
                <Link to="/" className="cool-link">
                  <span>
                    <img className="logo--size"
                         src={Logo} 
                         alt="" />
                  </span>
                </Link>
              </div>
            </nav>
            <nav className="Navbar__Items Navbar__Items--right">
              <div className="search__container">
                <input className="search" 
                       placeholder="Search" />
              </div>
              <Link to="/upload">
                <div className="Navbar__Link">
                  <input className="upload__button"
                         value="+UPLOAD"
                         type="button" />
                </div>
              </Link>
              <div className="Navbar__Link">
                <img className="man_icon"
                     src={ManIcon} 
                    alt="" />
              </div>
            </nav>
          </div>
        </div>
      </header>

    )
  }


export default Header