import React from 'react';
import Views from '../../../Assets/Icons/SVG/Icon-views.svg'
import Likes from '../../../Assets/Icons/SVG/Icon-likes.svg'


class VideoDescription extends React.Component {
     
  render() {

const date = new Date(this.props.timestamp)
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const formatDate = `${month}/${day}/${year}`;

    return (
      
      <div className="video__item--bigContainer">

        <div className="video__herotitle">
          <h1>{this.props.title}</h1>
        </div>
        <div className="video_item--smallContainer">
          <div className="video_herotitle--wrapper">
            <span id="video__author">{this.props.channel}</span>
            <span className="video__date">{formatDate}</span>
          </div>

          <div className="video_herotitle--wrapper">
        <span className="video__numbers"><img src={Views} className="icon__position" />{this.props.views}</span>
            <span className="video__numbers"><img src={Likes} className="icon__position" />{this.props.likes}</span>
          </div>
        </div>
        <div className="video__paragraph--wrapper">
        <p id="video__paragraph">{this.props.description}</p>
      </div>
  
      </div>
    
    )
  }}


export default VideoDescription;




