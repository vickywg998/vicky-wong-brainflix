import React from 'react';
import Logo from '../../../Assets/Logo/logo.png'
import {Link } from 'react-router-dom'
class HeaderLogo extends React.Component {
  render() {
    return (
      <div className="Navbar__Link logo__position">
       <Link to="/" className="cool-link">
        <span><img className="logo--size" src={Logo} alt="" /></span>
        </Link>
      </div>

    )
  }
}

export default HeaderLogo;