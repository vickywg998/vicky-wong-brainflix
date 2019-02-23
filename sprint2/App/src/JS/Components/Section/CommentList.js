import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  render() {
    const CommentList = this.props.commentObjs.map(function(comment) {
      return <Comment name={comment.name} date={comment.date} comment={comment.comment} />
    })
    return (
      
      <div className="comment_list"> 
        {CommentList}
      </div>
    )
  }
}

export default CommentList;
