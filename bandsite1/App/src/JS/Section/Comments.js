import React from 'react';
import singer from '../../Assets/Images/Mohan-muruge.jpg'

class Comments extends React.Component {
  render() {
    return (
      <div className="video_item--wrapper">
        <div className="comment_section_container--small">
        <div className="static_comments" id="comments">
<h4>3 Comments</h4>
      
            <div className="convo__input--wrapper">
              <div className="comment_icon">
                <img className="icons" src={singer} />
              </div>

              <div className="comment_content">
                <h5 className="conversation__title">JOIN THE CONVERSATION</h5>
                <div className="para_i"><input className="conversation__input" type="text" name="firstname" value="That was easily the most spectacular BMX moment ever."/>
                <button id="comment__button" type="button">COMMENT</button></div>
              </div>
              
          </div>


          
            <div className="static_comment">
              <div className="comment_icon">
                <img className="icons icon__color--grey" />
              </div>
              <div className="comment_content">
                <h4 className="comment_name">Micheal Lyons</h4><span className="comment_date">02/02/2019</span>
                <p className="para">They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.</p>
              </div>
            </div>
         

         
            <div className="static_comment">
              <div className="comment_icon">
                <img className="icons icon__color--grey" />
              </div>
              <div className="comment_content">
                <h4 className="comment_name">Gary Wong</h4><span className="comment_date">12/12/2018</span>
                <p className="para">Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!</p>
              </div>
            </div>
          

         
            <div className="static_comment">
              <div className="comment_icon">
                <img className="icons icon__color--grey" />
              </div>
              <div className="comment_content">
                <h4 className="comment_name">Theodore Duncan</h4><span className="comment_date">11/15/2018</span>
                <p className="para">How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!</p>
              </div>
          
          
            </div>
 </div>
        </div>
      </div>

    )
  }
}

export default Comments;




