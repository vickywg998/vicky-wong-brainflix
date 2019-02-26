import React, { Component } from 'react';


import Main from './Components/Main'
import Section from './Components/Section'
import axios from 'axios';
import { BrowserRouter, Switch, Router, Route, Link } from "react-router-dom";

const myAPI = "?api_key=1a2da34e-4760-45ed-9b07-e9acc896e17f";
const videoListURL = "https://project-2-api.herokuapp.com/videos/" + myAPI
const mainVideoURL = (videoID) => `http://project-2-api.herokuapp.com/videos/${videoID}${myAPI}`

class HomePage extends React.Component {

  state = {
    videos: [],
    nowPlayingVideo: null,
    comments: [], //name, timestamp, comment
    videoInfo: [], // likes, views, description, date, channel 
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
        const videoID = this.state.videos[0].id

        axios.get(mainVideoURL(videoID))
          .then(response => {

            this.setState({

              comments: response.data.comments,
              nowPlayingVideo: response.data.image,
              videoInfo: response.data,

            });
            console.log(response.data.image)
          });
      });
  }

  componentDidUpdate(lastProps, lastState) {
    if (this.props.match.params.id !== lastProps.match.params.id ) {
    axios
      .get(videoListURL)
      .then(response => {
        const videoID = this.props.match.params.id

        axios.get(mainVideoURL(videoID))
          .then(response => {
            this.setState({

              comments: response.data.comments,
              nowPlayingVideo: response.data.image,
              videoInfo: response.data,

            });
          });
      });
    }
  }

  render() {
    return (
      <div>
       <Main nowPlayingVideo={this.state.nowPlayingVideo}/>

        <Section
          videoInfo={this.state.videoInfo}
          comments={this.state.comments}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default HomePage;



