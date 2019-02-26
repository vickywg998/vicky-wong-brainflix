import React from 'react';
import Comment from './Comment';


const CommentList = props => {
    const commentList = props.comments.map((comment,i) => {
   
      const date = new Date(comment.timestamp)
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formatDate = `${month}/${day}/${year}`;


      return <Comment name={comment.name} timestamp={formatDate} comment={comment.comment} key={i}/>
    })
    return (
      <div className="comment_list"> 
        {commentList}
      </div>
    )
  }
  export default CommentList;