import React from 'react';
import Bikers from '../../Assets/Images/video-list-0.jpg'


class Main extends React.Component {
  render() {
    return (
      <main>

 <div className="video__wrapper">

 <video poster={Bikers} controls ></video>

 </div>

</main>

    )
  }
}

export default Main