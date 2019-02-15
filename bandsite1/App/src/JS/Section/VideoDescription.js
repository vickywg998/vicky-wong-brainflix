import React from 'react';
import Views from '../../../src/Assets/Icons/SVG/Icon-views.svg'
import Likes from '../../../src/Assets/Icons/SVG/Icon-likes.svg'

class VideoDescription extends React.Component {
  render() {
    return (

      <div className="video__item--bigContainer">

        <div className="video__herotitle">
          <h1>BMX Rampage: 2018 Highlights</h1>
        </div>
        <div className="video_item--smallContainer">

          <div className="video_herotitle--wrapper">
            <span id="video__author">By Red Cow </span>
            <span className="video__date">12/18/2018</span>
          </div>

          <div className="video_herotitle--wrapper">
            <span className="video__numbers"><img src={Views} className="icon__position"/>1,001,023</span>
            <span className="video__numbers"><img src={Likes}className="icon__position"/>110,985</span>
          </div>
        </div>


        <div className="video__paragraph--wrapper">
          <p id="video__paragraph">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the
     doors off what is possible on two wheels, unleashing some of the biggest
     moments the sport has ever seen. While mother nature only allowed for one full
     run before the conditions made it impossible to ride, that was all that was needed
     for event veteran Kyle Strait, who won the event for the second time -- eight years
after his first Red Cow Rampage title</p>

        </div>



      </div>
    )
  }
}

export default VideoDescription;




