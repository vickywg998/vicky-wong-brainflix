import React from 'react';
import VideoList from './Components/Sidebar/VideoList'
import VideoDescription from './Components/Section/VideoDescription'
import singer from '../Assets/Images/Mohan-muruge.jpg'
import CommentList from './Components/Section/CommentList';
import axios from 'axios';
import { BrowserRouter, Switch, Router, Route, Link } from "react-router-dom";


const myAPI = "1a2da34e-4760-45ed-9b07-e9acc896e17f";
const videoURL = "https://project-2-api.herokuapp.com/videos/?api_key="+ myAPI


class Section extends React.Component {
  state = {
    videos: []

      }
      componentDidMount() {
        axios
          .get(videoURL)
          .then(response => {
            console.log(response.data)
           
            this.setState({
              videos: response.data
            })
          })
      }
 
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
              <VideoList videos={this.state.videos} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Section;


