import React from 'react';
import CardList from './Components/Sidebar/CardList'
import VideoDescription from './Components/Section/VideoDescription'
import singer from '../Assets/Images/Mohan-muruge.jpg'
import CommentList from './Components/Section/CommentList';

class Section extends React.Component {
  render() {
    return (
      <section>
        <div className="section__container">
          <div className="section__wrapper">
            <VideoDescription />
            <div className="video_item--wrapper">
              <div className="comment_section_container--small">
                <div className="static_comments" id="comments">
                
                  <h4>3 Comments</h4>
                  <div className="convo__input--wrapper">
                    <div className="comment_icon">
                      <img className="icons" src={singer} />
                    </div>

                    <div className="comment_content comment__position">
                      <h5 className="conversation__title">JOIN THE CONVERSATION</h5>
                      <div className="para_i"><textarea className="conversation__input" type="textarea" name="firstname" value="That was easily the most spectacular BMX moment ever." />
                        <button id="comment__button" type="button">COMMENT</button></div>
                    </div>
                  </div>
                  <CommentList commentObjs={this.props.commentObjs} />
                </div>
              </div>
            </div>
          </div>
          <div className="cardlist__wrapper">
            <div className="cards__container">
              <div className="cards__wrapper">
                <h1 className="video__font">NEXT VIDEO</h1>
              </div>
              <CardList cards={this.props.cardImages} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Section;


