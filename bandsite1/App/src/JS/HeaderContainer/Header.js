import React from 'react';
import HeaderLogo from '../HeaderContainer/Logo'
import SearchInput from '../HeaderContainer/SearchInput'
import UploadButton from '../HeaderContainer/UploadButton'
import Avatar from '../HeaderContainer/Avatar'

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="nav__container">
          <div className="nav__wrapper">
            <nav className="Navbar__Items">
             <HeaderLogo />
            </nav>
            <nav className="Navbar__Items Navbar__Items--right">
              <SearchInput />
              <UploadButton />
              <Avatar />
            </nav>
          </div>
        </div>
      </header>

    )
  }
}

export default Header