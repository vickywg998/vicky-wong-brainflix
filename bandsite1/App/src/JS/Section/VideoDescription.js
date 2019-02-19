import React from 'react';
import VideoParagraph from './VideoParagraph'
import VideoHeroTitle from './VideoHeroTitle'
import SectionIcons from './SectionIcons'


class VideoDescription extends React.Component {
  render() {
    return (
      <div className="video__item--bigContainer">

        <div className="video__herotitle">
          <h1>BMX Rampage: 2018 Highlights</h1>
        </div>
        <div className="video_item--smallContainer">
     <VideoHeroTitle />
        <SectionIcons />
        </div>
        <VideoParagraph />
      </div>
    )
  }
}

export default VideoDescription;




