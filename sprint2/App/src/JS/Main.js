import React from 'react';
import CurrentVideo from './Components/Main/CurrentVideo'
import axios from 'axios'


const myAPI = "?api_key=1a2da34e-4760-45ed-9b07-e9acc896e17f";
const videoListURL = "https://project-2-api.herokuapp.com/videos/"+ myAPI
const mainVideoURL =(videoID)=> `http://project-2-api.herokuapp.com/videos/${videoID}${myAPI}`




class Main extends React.Component {
  state = {
    videos: [],
    nowPlayingVideo: null
   
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
              nowPlayingVideo: response.data.image

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
              nowPlayingVideo: response.data.image
            });
          });
        });
    }

    render() {
      return (
        <main>
      <div className="video__wrapper">
        <video poster={this.state.nowPlayingVideo} controls ></video>
      </div>
        </main>
      )
    }
  }

  
  export default Main


