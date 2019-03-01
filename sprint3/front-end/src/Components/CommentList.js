import React from 'react';
import Comment from './Comment';

const commentDate =(date)=> {
  return new Date(date).toLocaleDateString()
}

const CommentList = props => {
  const CommentList = props.comments.map((comment, i) => {

    return <Comment
      name={comment.name}
      timestamp={commentDate(comment.timestamp)}
      comment={comment.comment}
      key={i} />
      
  })
  return (
    <div className="comment_list">
      {CommentList}
    </div>
  )
}

export default CommentList;
