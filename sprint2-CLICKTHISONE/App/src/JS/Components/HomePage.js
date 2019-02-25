import React, { Component } from 'react';
import Main from '../Main'
import Section from '../Section'
import axios from 'axios';
import { BrowserRouter, Switch, Router, Route, Link } from "react-router-dom";


const myAPI = "?api_key=1a2da34e-4760-45ed-9b07-e9acc896e17f";
const videoListURL = "https://project-2-api.herokuapp.com/videos/"+ myAPI
const mainVideoURL =(videoID)=> `http://project-2-api.herokuapp.com/videos/${videoID}${myAPI}`


class HomePage extends React.Component {

  state = {
    videos: [],
    comments: []

      }

    componentDidMount() {
      axios
        .get(videoListURL)
        .then(response => {
          this.setState({
            videos: response.data
          });
        })
        .then(response => {
          const videoID = this.props.match.params.id;
        
       
          axios.get(mainVideoURL(videoID))
          .then(response => {
        
            this.setState({
              views: response.data.views,
              likes: response.data.likes,
              comments:response.data.comments,
              title: response.data.title,
              channel:response.data.channel,
              timestamp: response.data.timestamp,
              description: response.data.description
            });
          });
        });
    }

    componentDidUpdate(props) {
      axios
        .get(videoListURL)
        .then(response => {
          const videoID = props.videoID;
          
          axios.get(mainVideoURL(videoID))
          .then(response => {
         
            this.setState({
          
              views: response.data.views,
              likes: response.data.likes,
              comments:response.data.comments,
              title: response.data.title,
              channel:response.data.channel,
              timestamp: response.data.timestamp,
              description: response.data.description
            
            });
          });
        });
    }

  render() {
  return (
    <div>
      <Main videoID = {this.props.match.params.id} />
      <Section
        
        videos={this.state.videos}
        title={this.state.title} 
        channel={this.state.channel} 
        timestamp={this.state.timestamp} 
        views={this.state.views} 
        likes={this.state.likes}
        comments={this.state.comments}
        description={this.state.description} />
    </div>
  );
  }
}

export default HomePage;


