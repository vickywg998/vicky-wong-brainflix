import React, { Component } from 'react';
import Main from './Main'
import Section from './Section'
import axios from 'axios';

const myAPI = "?api_key=1a2da34e-4760-45ed-9b07-e9acc896e17f";

// const mainVideoURL = (videoID) => `http://project-2-api.herokuapp.com/videos/${videoID}${myAPI}`
const mainVideoURL = (videoID)=> `http://localhost:8080/videos/${videoID}`
const currentBunnyVideo= `https://project-2-api.herokuapp.com/stream${myAPI}`
const videoListURL = 'http://localhost:8080/videos/'


class HomePage extends React.Component {

  state = {
    videos: [],
    nowPlayingVideo: null,
    comments: [], 
    videoInfo: [], 
    currentPlayingID: '',
    currentBunnyVideo: currentBunnyVideo
 
  }

  componentDidMount() {
     axios.get(videoListURL)
      .then(response => {

        this.setState({
          videos: response.data,
          currentPlayingID: this.props.match.params.id,
          currentBunnyVideo: currentBunnyVideo
        });
      })
      .then(response => {
        const videoID = this.props.match.params.id
        axios.get(mainVideoURL(videoID))
          .then(response => {
            this.setState({
              comments: response.data.comments,
              nowPlayingVideo: response.data.image,
              videoInfo: response.data
            });
          });
      });
  }

  componentDidUpdate(lastProps) {
    if (this.props.match.params.id !== lastProps.match.params.id) {
      axios
        .get(videoListURL)
        .then(response => {
          const videoID = this.props.match.params.id
          this.setState({
            videos: response.data,
            currentPlayingID: this.props.match.params.id,
            currentBunnyVideo: currentBunnyVideo
          });
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
        <Main nowPlayingVideo={this.state.nowPlayingVideo} 
              currentBunnyVideo={this.state.currentBunnyVideo}
              />
        <Section
          videoInfo={this.state.videoInfo}
          comments={this.state.comments}
          videos={this.state.videos}
          currentPlayingID={this.state.currentPlayingID}
          />
      </div>
    );
  }
}

export default HomePage;



