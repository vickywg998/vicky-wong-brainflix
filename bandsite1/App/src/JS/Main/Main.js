import React from 'react';
import Bikers from '../../Assets/Images/video-list-0.jpg'
import VideoIcons from '../Main/VideoIcons';

class Main extends React.Component {
  render() {
    return (
      <main>
 <div className="video__container">
 <div className="video__wrapper">
 <img className="video__pic" src={Bikers} alt="" />
 
 <VideoIcons />
 </div>
 </div>
</main>


 
    )
  }
}

export default Main