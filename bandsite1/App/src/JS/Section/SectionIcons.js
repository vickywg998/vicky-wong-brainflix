import React from 'react';
import Views from '../../../src/Assets/Icons/SVG/Icon-views.svg'
import Likes from '../../../src/Assets/Icons/SVG/Icon-likes.svg'

class SectionIcons extends React.Component {
  render() {
    return (
      <div className="video_herotitle--wrapper">
        <span className="video__numbers"><img src={Views} className="icon__position" />1,001,023</span>
        <span className="video__numbers"><img src={Likes} className="icon__position" />110,985</span>
      </div>
    )
  }
}

export default SectionIcons;

