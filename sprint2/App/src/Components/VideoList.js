import React from 'react';
import Video from './Video'
import { Link } from 'react-router-dom'


const VideoList = props => {

  const videoList = props.videos.map((video, i) => {
    return <Link className="video__link"
      to={'/videos/' + video.id}
      data={video} >
      <Video
        image={video.image}
        title={video.title}
        channel={video.channel}
        key={i} />
    </Link>
  // }).filter(video => {
  //   return (
  //     video.id !== this.props.nowPlayingVideoID
  //   )
});

  return (
    <div className="card_list">
      {videoList}
    </div>
  )
}

export default VideoList;

