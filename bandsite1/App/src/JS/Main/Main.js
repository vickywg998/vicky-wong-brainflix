import React from 'react';
import Bikers from '../../Assets/Images/video-list-0.jpg'
import VideoIcons from '../Main/VideoIcons';

class Main extends React.Component {
  render() {
    return (
      <main>

 <div className="video__wrapper">

 <video poster={Bikers} controls ></video>
 <VideoIcons />
 </div>

</main>

    )
  }
}

export default Main