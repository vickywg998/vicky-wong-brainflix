import React from 'react';
import Views from '../Assets/Icons/SVG/Icon-views.svg'
import Likes from '../Assets/Icons/SVG/Icon-likes.svg'

const videoDate = (date) => {
  return new Date(date).toLocaleDateString()
}
class VideoDescription extends React.Component {

  render() {
    return (
      <div className="video__item--bigContainer">
        <div className="video__herotitle">
          <h1>{this.props.videoInfo.title}</h1>
        </div>
        <div className="video_item--smallContainer">
          <div className="video_herotitle--wrapper">
            <span id="video__author">
              {this.props.videoInfo.channel}</span>
            <span className="video__date">
              {videoDate(this.props.videoInfo.timestamp)}</span>
          </div>
          <div className="video_herotitle--wrapper">
            <span className="video__numbers">
              <img src={Views}
                className="icon__position" alt='' />
              {this.props.videoInfo.views}</span>
            <span className="video__numbers">
              <img src={Likes}
                className="icon__position" alt='' />
              {this.props.videoInfo.likes}</span>
          </div>
        </div>
        <div className="video__paragraph--wrapper">
          <p id="video__paragraph">{this.props.videoInfo.description}</p>
        </div>
      </div>
    )
  }
}

export default VideoDescription;




