import React from 'react';
import singer from '../../../Assets/Images/Mohan-muruge.jpg'


const Comment =props => {
  const {name, timestamp, comment} = props
  return (
            <div className="static_comment">
              <div className="comment_icon">
                <img className="icons icon__color--grey" alt="" />
              </div>
              <div className="comment_content">
                <h4 className="comment_name">{name}</h4><span className="comment_date">{timestamp}</span>
                <p className="para">{comment}</p>
              </div>
            </div>
  )
  }

export default Comment;


