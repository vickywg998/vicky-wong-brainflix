import React from 'react';
import singer from '../../../Assets/Images/Mohan-muruge.jpg'


class Comments extends React.Component {
  render() {
    return (


            <div className="static_comment">
              <div className="comment_icon">
                <img className="icons icon__color--grey" alt="" />
              </div>
              <div className="comment_content">
                <h4 className="comment_name">{this.props.name}</h4><span className="comment_date">{this.props.date}</span>
                <p className="para">{this.props.comment}</p>
              </div>
            </div>


          

    )
  }
}

export default Comments;




