import React from 'react';
import Video from './Video'
import {Link} from 'react-router-dom'

const VideoList = props => {
 
      const videoList = props.videos.map((video,i) => {
        return<Link to={'/videos/' + video.id}
         data={video} className="video__link">
         <Video 
         image={video.image} 
         title={video.title} 
         channel={video.channel} 
         key={i}/>
         </Link>
        
    })
    return (
      
      <div className="card_list"> 
        {videoList}
      </div>
    )

  }

export default VideoList;


