import React from 'react';
import ManIcon from '../../../src/Assets/Images/Mohan-muruge.jpg'

class Avatar extends React.Component {
  render() {
    return (
      <div className="Navbar__Link">
        <img className="man_icon" src={ManIcon} alt="" />
      </div>

    )
  }
}

export default Avatar;


