import React from 'react';
import Main from './Main'
import Section from './Section'
import axios from 'axios';

const myAPI = "?api_key=1a2da34e-4760-45ed-9b07-e9acc896e17f";
const mainVideoURL = id => `http://localhost:8080/videos/${id}`
const currentBunnyVideo= `https://project-2-api.herokuapp.com/stream${myAPI}`
const videoListURL = 'http://localhost:8080/videos/'


class HomePage extends React.Component {

  state = {
    videos: [],
    nowPlayingVideo: null,
    comments: [], 
    videoInfo: [], 
    currentBunnyVideo: currentBunnyVideo
  }

  componentDidMount() {
     axios.get(videoListURL)
      .then(response => {
        this.setState({
          videos: response.data,
          videoID:response.data[0].id,
          currentBunnyVideo: currentBunnyVideo
        });
      })
      .then(response => {
        axios.get(mainVideoURL(this.state.videoID))
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
          .get(mainVideoURL(this.props.match.params.id))
            .then(response => {
              this.setState({
                comments: response.data.comments,
                nowPlayingVideo: response.data.image,
                videoInfo: response.data
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
          />
      </div>
    );
  }
}

export default HomePage;



