import React from 'react';
import Bikers from '../../Assets/Images/video-list-0.jpg'

class Video extends React.Component {
  render() {
    return (
      <div className="video__wrapper">
        <video poster={Bikers} controls ></video>
      </div>
    )
  }
}

export default Video;