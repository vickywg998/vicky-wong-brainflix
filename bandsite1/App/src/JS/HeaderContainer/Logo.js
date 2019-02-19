import React from 'react';
import Logo from '../../../src/Assets/Logo/logo.png';

class HeaderLogo extends React.Component {
  render() {
    return (
      <div className="Navbar__Link logo__position">
        <img className="logo--size" src={Logo} alt="" />
      </div>

    )
  }
}

export default HeaderLogo;