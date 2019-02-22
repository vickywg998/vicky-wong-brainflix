
import React from 'react';
import Video from './Video'

const VideoList = props => {
 
      const videoList = props.videos.map(video => {
        return <Video image={video.image} title={video.title} channel={video.channel} />
    })

    return (
      <div className="card_list"> 
        {videoList}
      </div>
    )
  }

export default VideoList;

