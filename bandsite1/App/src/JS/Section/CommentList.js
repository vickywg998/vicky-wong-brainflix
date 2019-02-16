import React from 'react';
import Comments from './Comments';

class CommentList extends React.Component {
  render() {
    const CommentList = this.props.commentObjs.map(function(comment) {
      return <Comments name={comment.name} date={comment.date} comment={comment.comment} />
    })
    return (
      
      <div className="comment_list"> 
        {CommentList}
      </div>
    )
  }
}

export default CommentList;

